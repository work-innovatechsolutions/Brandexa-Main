"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsPage, SeoMetadata } from "@/types/cms";
import { Globe, Search, Edit3, CheckCircle2, X, ExternalLink, Loader2 } from "lucide-react";

export default function AdminSeoManagementPage() {
  const { adminProfile } = useAuth();
  const [pages, setPages] = useState<CmsPage[]>([]);
  const [editingPage, setEditingPage] = useState<CmsPage | null>(null);
  const [seoForm, setSeoForm] = useState<SeoMetadata>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "pages"));
      const list: CmsPage[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsPage));
      setPages(list);
    } catch (e) {
      console.warn("Could not load pages for SEO:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (page: CmsPage) => {
    setEditingPage(page);
    setSeoForm(
      page.seo || {
        metaTitle: `${page.title} | Brandexa Growth Agency`,
        metaDescription: `Discover how Brandexa empowers modern brands with ${page.title.toLowerCase()} strategies and high-performing digital platforms.`,
        canonicalUrl: `https://brandexagrowth.com${page.route}`,
        robots: "index, follow",
      }
    );
  };

  const handleSaveSeo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPage) return;
    setSaving(true);
    try {
      await setDoc(
        doc(db, "pages", editingPage.id),
        {
          seo: seoForm,
          lastUpdated: new Date().toISOString(),
          updatedBy: adminProfile?.name || "Admin",
        },
        { merge: true }
      );

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Updated",
          "seo",
          editingPage.id,
          `Updated SEO metadata for page '${editingPage.title}'`
        );
      }

      setPages((prev) =>
        prev.map((p) => (p.id === editingPage.id ? { ...p, seo: seoForm } : p))
      );
      setEditingPage(null);
    } catch (err) {
      console.error("Save SEO error:", err);
    } finally {
      setSaving(false);
    }
  };

  const filtered = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminShell title="SEO Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Search Engine Optimization (SEO)</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Control meta titles, descriptions, canonical URLs, indexing directives, and social share cards.
            </p>
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages..."
              className="admin-input !py-1.5 !pl-9 !text-xs"
            />
          </div>
        </div>

        <div className="admin-card !p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Meta Title</th>
                  <th>Meta Description</th>
                  <th>Indexing</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((page) => (
                  <tr key={page.id}>
                    <td>
                      <div className="font-bold text-white text-sm">{page.title}</div>
                      <div className="text-[11px] text-white/40 font-mono">{page.route}</div>
                    </td>
                    <td>
                      <div className="text-xs text-white/80 font-medium max-w-xs truncate">
                        {page.seo?.metaTitle || `${page.title} | Brandexa Growth`}
                      </div>
                    </td>
                    <td>
                      <div className="text-xs text-white/60 max-w-sm line-clamp-1">
                        {page.seo?.metaDescription || "Default global description applies"}
                      </div>
                    </td>
                    <td>
                      <span className="text-[11px] font-mono text-[#b8ff2c] bg-[#b8ff2c]/10 px-2 py-0.5 rounded border border-[#b8ff2c]/20">
                        {page.seo?.robots || "index, follow"}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(page)}
                        className="admin-btn admin-btn-primary !py-1 !px-3 !text-xs"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit SEO</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {editingPage && (
          <div className="admin-modal-overlay" onClick={() => setEditingPage(null)}>
            <div
              className="admin-modal max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">
                  SEO Settings: {editingPage.title}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingPage(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveSeo} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="admin-label !mb-0">Page Meta Title</label>
                    <span className="text-[10px] text-white/40">{seoForm.metaTitle?.length || 0}/60 chars</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={seoForm.metaTitle || ""}
                    onChange={(e) => setSeoForm({ ...seoForm, metaTitle: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="admin-label !mb-0">Meta Description</label>
                    <span className="text-[10px] text-white/40">{seoForm.metaDescription?.length || 0}/160 chars</span>
                  </div>
                  <textarea
                    rows={3}
                    required
                    value={seoForm.metaDescription || ""}
                    onChange={(e) => setSeoForm({ ...seoForm, metaDescription: e.target.value })}
                    className="admin-textarea"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Canonical URL</label>
                    <input
                      type="text"
                      value={seoForm.canonicalUrl || ""}
                      onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                      className="admin-input font-mono !text-xs"
                    />
                  </div>
                  <div>
                    <label className="admin-label">Robots Directive</label>
                    <input
                      type="text"
                      value={seoForm.robots || "index, follow"}
                      onChange={(e) => setSeoForm({ ...seoForm, robots: e.target.value })}
                      className="admin-input font-mono !text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingPage(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save SEO Settings"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
