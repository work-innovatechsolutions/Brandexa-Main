"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsBlog } from "@/types/cms";
import {
  FileText,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
  Search,
  Star,
  Calendar,
  CheckCircle2,
  Clock,
  Archive,
} from "lucide-react";

export default function AdminBlogsListPage() {
  const { adminProfile } = useAuth();
  const [blogs, setBlogs] = useState<CmsBlog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "blogs"));
      const list: CmsBlog[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsBlog));
      setBlogs(list);
    } catch (e) {
      console.warn("Could not load blogs:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete blog post "${title}"? This action cannot be undone.`)) return;
    try {
      await deleteDoc(doc(db, "blogs", id));
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Deleted",
          "blog",
          id,
          `Deleted blog post '${title}'`
        );
      }
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (e) {
      console.error("Delete blog error:", e);
    }
  };

  const handleToggleStatus = async (blog: CmsBlog) => {
    const newStatus = blog.status === "published" ? "draft" : "published";
    try {
      await updateDoc(doc(db, "blogs", blog.id), {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });
      setBlogs((prev) =>
        prev.map((b) => (b.id === blog.id ? { ...b, status: newStatus } : b))
      );
    } catch (e) {
      console.error("Status update error:", e);
    }
  };

  const filtered = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || b.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || b.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <AdminShell title="Blog Publishing Studio">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Articles & Insights</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Draft, schedule, format, and publish articles to the public Brandexa blog.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="admin-btn admin-btn-primary !py-2 !px-4 !text-xs self-start"
          >
            <Plus className="w-4 h-4" />
            <span>Create Article</span>
          </Link>
        </div>

        {/* Filters Bar */}
        <div className="admin-card !p-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="admin-input !py-1.5 !pl-9 !text-xs"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="admin-select !py-1.5 !w-auto !text-xs"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="admin-select !py-1.5 !w-auto !text-xs"
            >
              <option value="all">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Content Strategy">Content Strategy</option>
              <option value="Social Media">Social Media</option>
            </select>
          </div>

          <div className="text-xs text-white/40 font-medium">
            Showing <strong className="text-white">{filtered.length}</strong> of {blogs.length} articles
          </div>
        </div>

        {/* Articles Table */}
        <div className="admin-card !p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <div className="flex items-center gap-3.5 min-w-[280px]">
                        <div className="w-16 h-11 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white line-clamp-1">{blog.title}</div>
                          <div className="text-[11px] text-white/40 font-mono mt-0.5">/blog/{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-xs font-semibold text-[#b8ff2c] bg-[#b8ff2c]/10 px-2 py-0.5 rounded border border-[#b8ff2c]/20 whitespace-nowrap">
                        {blog.category}
                      </span>
                    </td>
                    <td>
                      <div className="text-xs text-white/80 font-medium">{blog.author?.name || "Alex Rivera"}</div>
                      <div className="text-[10px] text-white/40">{blog.readTime}</div>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(blog)}
                        className={`admin-badge cursor-pointer transition-transform hover:scale-105 ${
                          blog.status === "published"
                            ? "admin-badge-published"
                            : "admin-badge-draft"
                        }`}
                        title="Click to toggle status"
                      >
                        {blog.status}
                      </button>
                    </td>
                    <td>
                      <div className="flex items-center gap-1.5">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5"
                          title="View Live Article"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/admin/blogs/${blog.id}/edit`}
                          className="admin-btn admin-btn-primary !py-1 !px-2.5 !text-xs"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
