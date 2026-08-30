"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsBlog } from "@/types/cms";
import { ArrowLeft, Image, Sparkles, Globe, Tag, User } from "lucide-react";

export default function AdminNewBlogPage() {
  const router = useRouter();
  const { adminProfile } = useAuth();

  const [blog, setBlog] = useState<CmsBlog>({
    id: "",
    title: "",
    slug: "",
    category: "Web Development",
    tags: ["Strategy", "Growth"],
    author: {
      name: adminProfile?.name || "Alex Rivera",
      role: "Head of Engineering",
      avatarUrl: "/wp-content/uploads/2024/11/author-1-2.webp",
    },
    featuredImage: "/wp-content/uploads/2024/11/post-3-2.webp",
    excerpt: "",
    content: "## Overview\n\nStart authoring your structured insights here...",
    readTime: "5 min read",
    isFeatured: false,
    status: "published",
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
      metaTitle: "",
      metaDescription: "",
    },
  });

  const [saving, setSaving] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setBlog((prev) => ({
      ...prev,
      title,
      slug: prev.slug ? prev.slug : slug,
      seo: {
        ...prev.seo,
        metaTitle: `${title} | Brandexa Insights`,
      },
    }));
  };

  const handleSave = async (status: "draft" | "published") => {
    if (!blog.title.trim()) {
      alert("Please enter an article title.");
      return;
    }

    setSaving(true);
    try {
      const blogId = blog.slug || `blog_${Date.now()}`;
      const payload: CmsBlog = {
        ...blog,
        id: blogId,
        status,
        publishedAt: status === "published" ? new Date().toISOString() : blog.publishedAt,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "blogs", blogId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          status === "published" ? "Published" : "Created Draft",
          "blog",
          blogId,
          `${status === "published" ? "Published" : "Drafted"} blog article '${blog.title}'`
        );
      }

      router.push("/admin/blogs");
    } catch (err) {
      console.error("Save blog error:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell title="Publish New Article">
      <div className="space-y-6 pb-24 max-w-5xl">
        {/* Header Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl font-extrabold text-white">Author New Article</h1>
            <p className="text-xs text-white/50">Write, format, and optimize insights for publication.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editorial Canvas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Slug */}
            <div className="admin-card space-y-4">
              <div>
                <label className="admin-label">Article Title</label>
                <input
                  type="text"
                  required
                  value={blog.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Modern Web Architecture for High-Converting Brands"
                  className="admin-input font-bold !text-lg !py-3"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="admin-label">URL Slug</label>
                  <input
                    type="text"
                    required
                    value={blog.slug}
                    onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
                    className="admin-input font-mono !text-xs"
                  />
                </div>
                <div>
                  <label className="admin-label">Estimated Read Time</label>
                  <input
                    type="text"
                    value={blog.readTime}
                    onChange={(e) => setBlog({ ...blog, readTime: e.target.value })}
                    placeholder="e.g. 5 min read"
                    className="admin-input"
                  />
                </div>
              </div>

              <div>
                <label className="admin-label">Article Excerpt (Short Summary)</label>
                <textarea
                  rows={2}
                  value={blog.excerpt}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      excerpt: e.target.value,
                      seo: { ...blog.seo, metaDescription: e.target.value },
                    })
                  }
                  placeholder="Summarize key takeaways in 1-2 sentences..."
                  className="admin-textarea"
                />
              </div>
            </div>

            {/* Rich Content Editor */}
            <div className="admin-card space-y-3">
              <label className="admin-label !mb-0">Article Body Content</label>
              <RichTextEditor
                value={blog.content}
                onChange={(content) => setBlog({ ...blog, content })}
                minHeight="420px"
              />
            </div>

            {/* SEO Inspector Card */}
            <div className="admin-card space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-white/5 pb-2">
                <Globe className="w-4 h-4 text-[#b8ff2c]" />
                <span>Search Engine Optimization (SEO)</span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="admin-label !mb-0">Meta Title</label>
                  <span className="text-[10px] text-white/40">
                    {blog.seo?.metaTitle?.length || 0} / 60 chars
                  </span>
                </div>
                <input
                  type="text"
                  value={blog.seo?.metaTitle || ""}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      seo: { ...blog.seo, metaTitle: e.target.value },
                    })
                  }
                  className="admin-input !text-xs"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="admin-label !mb-0">Meta Description</label>
                  <span className="text-[10px] text-white/40">
                    {blog.seo?.metaDescription?.length || 0} / 160 chars
                  </span>
                </div>
                <textarea
                  rows={2}
                  value={blog.seo?.metaDescription || ""}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      seo: { ...blog.seo, metaDescription: e.target.value },
                    })
                  }
                  className="admin-textarea !text-xs"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Settings Panel */}
          <div className="space-y-6">
            {/* Category & Tags */}
            <div className="admin-card space-y-4">
              <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Categorization</div>
              <div>
                <label className="admin-label">Category</label>
                <select
                  value={blog.category}
                  onChange={(e) => setBlog({ ...blog, category: e.target.value })}
                  className="admin-select"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Content Strategy">Content Strategy</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>

              <div>
                <label className="admin-label">Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={blog.tags?.join(", ") || ""}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      tags: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                  className="admin-input !text-xs"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                  <input
                    type="checkbox"
                    checked={blog.isFeatured}
                    onChange={(e) => setBlog({ ...blog, isFeatured: e.target.checked })}
                    className="rounded border-white/20 text-[#b8ff2c]"
                  />
                  <span>Feature on Homepage Spotlight</span>
                </label>
              </div>
            </div>

            {/* Featured Image */}
            <div className="admin-card space-y-3">
              <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Cover Image</div>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 relative border border-white/10">
                <img
                  src={blog.featuredImage}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => setMediaPickerOpen(true)}
                className="admin-btn admin-btn-secondary w-full !py-2 !text-xs text-[#b8ff2c]"
              >
                <Image className="w-4 h-4" />
                <span>Change Cover Image</span>
              </button>
            </div>

            {/* Author Profile */}
            <div className="admin-card space-y-3">
              <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Author Credit</div>
              <div>
                <label className="admin-label">Author Name</label>
                <input
                  type="text"
                  value={blog.author?.name}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      author: { ...blog.author, name: e.target.value },
                    })
                  }
                  className="admin-input !text-xs"
                />
              </div>
              <div>
                <label className="admin-label">Author Role</label>
                <input
                  type="text"
                  value={blog.author?.role}
                  onChange={(e) =>
                    setBlog({
                      ...blog,
                      author: { ...blog.author, role: e.target.value },
                    })
                  }
                  className="admin-input !text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        <MediaPickerModal
          isOpen={mediaPickerOpen}
          onClose={() => setMediaPickerOpen(false)}
          onSelect={(url) => setBlog({ ...blog, featuredImage: url })}
          currentValue={blog.featuredImage}
          folderFilter="blog"
        />

        <PublishBar
          onSaveDraft={() => handleSave("draft")}
          onPublish={() => handleSave("published")}
          isSaving={saving}
          isPublishing={saving}
          status={blog.status}
        />
      </div>
    </AdminShell>
  );
}
