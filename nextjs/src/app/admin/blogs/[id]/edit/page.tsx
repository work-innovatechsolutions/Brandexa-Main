"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsBlog } from "@/types/cms";
import { ArrowLeft, Image, Globe, Loader2, ExternalLink } from "lucide-react";

export default function AdminEditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const { adminProfile } = useAuth();
  const blogId = params?.id as string;

  const [blog, setBlog] = useState<CmsBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  useEffect(() => {
    async function loadBlog() {
      if (!blogId) return;
      try {
        const snap = await getDoc(doc(db, "blogs", blogId));
        if (snap.exists()) {
          setBlog({ id: snap.id, ...snap.data() } as CmsBlog);
        }
      } catch (e) {
        console.error("Load blog error:", e);
      } finally {
        setLoading(false);
      }
    }
    loadBlog();
  }, [blogId]);

  const handleSave = async (status: "draft" | "published") => {
    if (!blog) return;
    setSaving(true);
    try {
      const payload: CmsBlog = {
        ...blog,
        status,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "blogs", blogId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          status === "published" ? "Published" : "Updated",
          "blog",
          blogId,
          `Saved blog article '${blog.title}'`
        );
      }
      router.push("/admin/blogs");
    } catch (e) {
      console.error("Save blog error:", e);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminShell title="Edit Article">
        <div className="h-64 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-[#b8ff2c] animate-spin" />
        </div>
      </AdminShell>
    );
  }

  if (!blog) {
    return (
      <AdminShell title="Article Not Found">
        <div className="text-center py-12">
          <h2 className="text-lg font-bold text-white">Article Not Found</h2>
          <Link href="/admin/blogs" className="text-xs text-[#b8ff2c] mt-2 inline-block">
            ← Return to Articles List
          </Link>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title={`Edit: ${blog.title}`}>
      <div className="space-y-6 pb-24 max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/blogs"
              className="p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-xl font-extrabold text-white">Edit Article</h1>
              <p className="text-xs text-white/50">Update content, SEO meta tags, and cover image.</p>
            </div>
          </div>
          <Link
            href={`/blog/${blog.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs"
          >
            <span>View Live Article</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="admin-card space-y-4">
              <div>
                <label className="admin-label">Article Title</label>
                <input
                  type="text"
                  required
                  value={blog.title}
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
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
                    className="admin-input"
                  />
                </div>
              </div>

              <div>
                <label className="admin-label">Article Excerpt</label>
                <textarea
                  rows={2}
                  value={blog.excerpt}
                  onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
                  className="admin-textarea"
                />
              </div>
            </div>

            <div className="admin-card space-y-3">
              <label className="admin-label !mb-0">Article Body Content</label>
              <RichTextEditor
                value={blog.content}
                onChange={(content) => setBlog({ ...blog, content })}
                minHeight="420px"
              />
            </div>

            <div className="admin-card space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-white/5 pb-2">
                <Globe className="w-4 h-4 text-[#b8ff2c]" />
                <span>Search Engine Optimization (SEO)</span>
              </div>
              <div>
                <label className="admin-label">Meta Title</label>
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
                <label className="admin-label">Meta Description</label>
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

          <div className="space-y-6">
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
