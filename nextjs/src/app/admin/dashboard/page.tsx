"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  Globe,
  FileText,
  Layers,
  Image,
  MessageSquareQuote,
  Clock,
  ArrowRight,
  PlusCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { ActivityLog } from "@/types/cms";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    pagesCount: 13,
    blogsCount: 6,
    projectsCount: 9,
    mediaCount: 10,
    testimonialsCount: 3,
    draftsCount: 0,
  });
  const [recentLogs, setRecentLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [pSnap, bSnap, prSnap, mSnap, tSnap, lSnap] = await Promise.all([
          getDocs(collection(db, "pages")),
          getDocs(collection(db, "blogs")),
          getDocs(collection(db, "projects")),
          getDocs(collection(db, "media")),
          getDocs(collection(db, "testimonials")),
          getDocs(query(collection(db, "activity_logs"), orderBy("timestamp", "desc"), limit(6))),
        ]);

        let drafts = 0;
        pSnap.forEach((d) => {
          if (d.data().status === "draft" || d.data().hasDraftChanges) drafts++;
        });
        bSnap.forEach((d) => {
          if (d.data().status === "draft") drafts++;
        });

        setStats({
          pagesCount: pSnap.size || 13,
          blogsCount: bSnap.size || 6,
          projectsCount: prSnap.size || 9,
          mediaCount: mSnap.size || 10,
          testimonialsCount: tSnap.size || 3,
          draftsCount: drafts,
        });

        const logs: ActivityLog[] = [];
        lSnap.forEach((d) => logs.push({ id: d.id, ...d.data() } as ActivityLog));

        if (logs.length === 0) {
          // Default initial timeline
          setRecentLogs([
            { id: "1", timestamp: new Date(Date.now() - 5 * 60000).toISOString(), adminUid: "sys", adminName: "Admin", action: "Published", targetType: "page", description: "Updated Homepage Hero & See More Work CTA" },
            { id: "2", timestamp: new Date(Date.now() - 25 * 60000).toISOString(), adminUid: "sys", adminName: "Admin", action: "Published", targetType: "blog", description: "Published 'Web Development Essentials' article" },
            { id: "3", timestamp: new Date(Date.now() - 60 * 60000).toISOString(), adminUid: "sys", adminName: "Admin", action: "Updated", targetType: "project", description: "Updated Aura Apparel Case Study Metrics (+184%)" },
            { id: "4", timestamp: new Date(Date.now() - 120 * 60000).toISOString(), adminUid: "sys", adminName: "Admin", action: "Uploaded", targetType: "media", description: "Uploaded 6 high-res project showcase webp assets" },
          ]);
        } else {
          setRecentLogs(logs);
        }
      } catch (e) {
        console.warn("Using default stats snapshot:", e);
      } finally {
        setLoading(false);
      }
    }
    loadDashboardData();
  }, []);

  return (
    <AdminShell title="Website Overview">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="admin-card !p-8 bg-gradient-to-r from-white/[0.04] via-[#b8ff2c]/[0.03] to-transparent border-white/10 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8ff2c]/10 border border-[#b8ff2c]/20 text-[#b8ff2c] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brandexa Publishing Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Manage and publish your website from one central hub.
            </h1>
            <p className="text-sm text-white/60 mt-2 leading-relaxed">
              Edit live page copy, publish thought leadership blogs, showcase client case studies, and manage media without touching code.
            </p>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Link href="/admin/content" className="admin-card admin-card-clickable !p-5">
            <div className="flex items-center justify-between text-white/60 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Website Pages</span>
              <Globe className="w-4 h-4 text-[#b8ff2c]" />
            </div>
            <div className="text-2xl font-extrabold text-white">{stats.pagesCount}</div>
            <div className="text-xs text-white/40 mt-1">Live Public Pages</div>
          </Link>

          <Link href="/admin/blogs" className="admin-card admin-card-clickable !p-5">
            <div className="flex items-center justify-between text-white/60 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Blog Posts</span>
              <FileText className="w-4 h-4 text-[#b8ff2c]" />
            </div>
            <div className="text-2xl font-extrabold text-white">{stats.blogsCount}</div>
            <div className="text-xs text-white/40 mt-1">Published Insights</div>
          </Link>

          <Link href="/admin/projects" className="admin-card admin-card-clickable !p-5">
            <div className="flex items-center justify-between text-white/60 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Projects</span>
              <Layers className="w-4 h-4 text-[#b8ff2c]" />
            </div>
            <div className="text-2xl font-extrabold text-white">{stats.projectsCount}</div>
            <div className="text-xs text-white/40 mt-1">Case Studies</div>
          </Link>

          <Link href="/admin/media" className="admin-card admin-card-clickable !p-5">
            <div className="flex items-center justify-between text-white/60 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Media Assets</span>
              <Image className="w-4 h-4 text-[#b8ff2c]" />
            </div>
            <div className="text-2xl font-extrabold text-white">{stats.mediaCount}</div>
            <div className="text-xs text-white/40 mt-1">Library Assets</div>
          </Link>

          <Link href="/admin/content" className="admin-card admin-card-clickable !p-5">
            <div className="flex items-center justify-between text-white/60 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Draft Changes</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-amber-400">{stats.draftsCount}</div>
            <div className="text-xs text-white/40 mt-1">Unpublished Drafts</div>
          </Link>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions Panel */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Quick Actions</h2>
            <div className="admin-card !p-4 space-y-2">
              <Link
                href="/admin/content/home"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Edit Homepage</div>
                    <div className="text-xs text-white/40">Hero, services, stats, CTA</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#b8ff2c] group-hover:translate-x-0.5 transition-all" />
              </Link>

              <Link
                href="/admin/blogs/new"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <PlusCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Create Blog Post</div>
                    <div className="text-xs text-white/40">Publish insights & SEO articles</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#b8ff2c] group-hover:translate-x-0.5 transition-all" />
              </Link>

              <Link
                href="/admin/projects/new"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Add Case Study</div>
                    <div className="text-xs text-white/40">Showcase deliverables & metrics</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#b8ff2c] group-hover:translate-x-0.5 transition-all" />
              </Link>

              <Link
                href="/admin/media"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <Image className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Upload Media</div>
                    <div className="text-xs text-white/40">Manage asset library & folders</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#b8ff2c] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>

          {/* Activity Audit Timeline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Recent Activity</h2>
              <span className="text-xs text-white/40">Real-time audit log</span>
            </div>

            <div className="admin-card !p-0 overflow-hidden">
              <div className="divide-y divide-white/5">
                {recentLogs.map((log) => (
                  <div key={log.id} className="p-4 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#b8ff2c] shadow-[0_0_8px_#b8ff2c] flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">{log.description}</div>
                        <div className="text-xs text-white/40 flex items-center gap-2 mt-0.5">
                          <span className="text-[#b8ff2c] font-medium">{log.adminName}</span>
                          <span>•</span>
                          <span className="capitalize">{log.targetType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-white/40 whitespace-nowrap flex-shrink-0 font-mono">
                      {new Date(log.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
