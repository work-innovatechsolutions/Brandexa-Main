"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsProject } from "@/types/cms";
import { Layers, Plus, Edit3, Trash2, ExternalLink, Search, Star, CheckCircle2 } from "lucide-react";

import { OUR_WORK_CMS_PROJECTS } from "@/lib/cms/case-studies-data";
import { setDoc } from "firebase/firestore";

export default function AdminProjectsListPage() {
  const { adminProfile } = useAuth();
  const [projects, setProjects] = useState<CmsProject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "projects"));
      const list: CmsProject[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsProject));

      // Merge with default Our Work projects (by ID or Slug)
      const existingMap = new Map<string, CmsProject>();
      list.forEach((p) => {
        if (p.id) existingMap.set(p.id, p);
        if (p.slug) existingMap.set(p.slug, p);
      });

      const combined: CmsProject[] = [...list];
      for (const def of OUR_WORK_CMS_PROJECTS) {
        if (!existingMap.has(def.id) && !existingMap.has(def.slug)) {
          combined.push(def);
          // Persist to Firestore in background
          setDoc(doc(db, "projects", def.id), def, { merge: true }).catch(() => {});
        }
      }

      combined.sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
      setProjects(combined);
    } catch (e) {
      console.warn("Could not load projects:", e);
      setProjects(OUR_WORK_CMS_PROJECTS);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete project case study '${title}'? This action cannot be undone.`)) return;
    try {
      await deleteDoc(doc(db, "projects", id));
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Deleted",
          "project",
          id,
          `Deleted project case study '${title}'`
        );
      }
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const handleToggleFeatured = async (project: CmsProject) => {
    try {
      await updateDoc(doc(db, "projects", project.id), {
        isFeatured: !project.isFeatured,
      });
      setProjects((prev) =>
        prev.map((p) => (p.id === project.id ? { ...p, isFeatured: !p.isFeatured } : p))
      );
    } catch (e) {
      console.error("Toggle featured error:", e);
    }
  };

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || p.categories?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminShell title="Projects & Case Studies">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Portfolio & Case Studies</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage client transformations, KPIs, image galleries, and category tags.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies..."
                className="admin-input !py-1.5 !pl-9 !text-xs"
              />
            </div>
            <Link
              href="/admin/projects/new"
              className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Case Study</span>
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="admin-card flex flex-col justify-between group">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-white/5 mb-4 relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleToggleFeatured(project)}
                      className={`p-1.5 rounded-lg backdrop-blur-md transition-colors ${
                        project.isFeatured
                          ? "bg-[#b8ff2c] text-black shadow-lg"
                          : "bg-black/60 text-white/50 hover:text-white"
                      }`}
                      title={project.isFeatured ? "Featured on Home" : "Click to feature"}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </button>
                    <span
                      className={`admin-badge !py-0.5 !px-2 !text-[10px] ${
                        project.status === "published"
                          ? "admin-badge-published"
                          : "admin-badge-draft"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.categories?.map((cat, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-bold text-[#b8ff2c] uppercase px-2 py-0.5 rounded bg-[#b8ff2c]/10 border border-[#b8ff2c]/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#b8ff2c] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-white/50 font-medium mt-0.5">Client: {project.clientName}</div>

                {/* Key Metrics Preview */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/8">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="text-xs font-black text-[#b8ff2c]">{m.value}</div>
                        <div className="text-[10px] text-white/50 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-5 border-t border-white/8 flex items-center justify-between gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-btn admin-btn-secondary !py-1.5 !px-2.5 !text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleDelete(project.id, project.title)}
                    className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="admin-btn admin-btn-primary !py-1.5 !px-3.5 !text-xs"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Case Study</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
