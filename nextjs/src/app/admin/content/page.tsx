"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { CmsPage } from "@/types/cms";
import { Globe, Edit3, ExternalLink, Search, Clock, CheckCircle2, FileText } from "lucide-react";

export default function AdminContentCatalogPage() {
  const [pages, setPages] = useState<CmsPage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPages() {
      try {
        const snap = await getDocs(collection(db, "pages"));
        const list: CmsPage[] = [];
        snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsPage));
        setPages(list);
      } catch (e) {
        console.warn("Using fallback pages list:", e);
      } finally {
        setLoading(false);
      }
    }
    loadPages();
  }, []);

  const filteredPages = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getEditHref = (pageId: string) => {
    if (["home", "about", "services", "pricing", "team", "faqs", "contact"].includes(pageId)) {
      return `/admin/content/${pageId}`;
    }
    if (pageId === "our-work") return "/admin/projects";
    if (pageId === "blogs") return "/admin/blogs";
    if (pageId === "testimonials") return "/admin/testimonials";
    return `/admin/content/home`;
  };

  return (
    <AdminShell title="Website Content Pages">
      <div className="space-y-6">
        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Public Website Pages</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Select any public page to edit its headings, sections, media, and layout.
            </p>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages by title or URL..."
              className="admin-input !py-2 !pl-9 !text-xs"
            />
          </div>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="admin-card flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span
                    className={`admin-badge ${
                      page.status === "published"
                        ? "admin-badge-published"
                        : "admin-badge-draft"
                    }`}
                  >
                    {page.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#b8ff2c] transition-colors">
                  {page.title}
                </h3>
                <div className="text-xs text-white/40 font-mono mt-0.5">{page.route}</div>

                <div className="text-xs text-white/60 mt-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-white/40" />
                  <span>Sections: {page.sectionsOrder?.length || 5} blocks</span>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-white/8 flex items-center justify-between gap-2">
                <Link
                  href={page.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs"
                >
                  <span>View Live</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>

                <Link
                  href={getEditHref(page.id)}
                  className="admin-btn admin-btn-primary !py-1.5 !px-3.5 !text-xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Content</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
