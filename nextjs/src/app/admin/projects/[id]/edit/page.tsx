"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { DynamicMetricBuilder } from "@/components/admin/DynamicMetricBuilder";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsProject } from "@/types/cms";
import { Image, ArrowLeft, Loader2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminEditProjectPage() {
  const params = useParams();
  const router = useRouter();
  const { adminProfile } = useAuth();
  const projectId = params?.id as string;

  const [project, setProject] = useState<CmsProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerField, setMediaPickerField] = useState<"heroImage" | null>(null);

  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      try {
        const snap = await getDoc(doc(db, "projects", projectId));
        if (snap.exists()) {
          setProject({ id: snap.id, ...snap.data() } as CmsProject);
        }
      } catch (e) {
        console.error("Load project error:", e);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [projectId]);

  const handleSave = async (status: "draft" | "published") => {
    if (!project) return;
    setSaving(true);
    try {
      const payload: CmsProject = {
        ...project,
        status,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "projects", projectId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          status === "published" ? "Published" : "Updated",
          "project",
          projectId,
          `Saved case study '${project.title}'`
        );
      }
      router.push("/admin/projects");
    } catch (e) {
      console.error("Save project error:", e);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminShell title="Edit Case Study">
        <div className="h-64 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-[#b8ff2c] animate-spin" />
        </div>
      </AdminShell>
    );
  }

  if (!project) {
    return (
      <AdminShell title="Case Study Not Found">
        <div className="text-center py-12">
          <h2 className="text-lg font-bold text-white">Project Not Found</h2>
          <Link href="/admin/projects" className="text-xs text-[#b8ff2c] mt-2 inline-block">
            ← Return to Projects
          </Link>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title={`Edit: ${project.title}`}>
      <div className="space-y-6 pb-24 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/projects"
              className="p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-xl font-extrabold text-white">Edit Case Study: {project.title}</h1>
              <p className="text-xs text-white/50">Update client results, metrics, and cover imagery.</p>
            </div>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs"
          >
            <span>View Public Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Basic Details */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Overview</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Project Title</label>
              <input
                type="text"
                required
                value={project.title}
                onChange={(e) => setProject({ ...project, title: e.target.value })}
                className="admin-input font-bold"
              />
            </div>
            <div>
              <label className="admin-label">Client Name</label>
              <input
                type="text"
                required
                value={project.clientName}
                onChange={(e) => setProject({ ...project, clientName: e.target.value })}
                className="admin-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">URL Slug</label>
              <input
                type="text"
                required
                value={project.slug}
                onChange={(e) => setProject({ ...project, slug: e.target.value })}
                className="admin-input font-mono !text-xs"
              />
            </div>
            <div>
              <label className="admin-label">Categories (Comma-separated)</label>
              <input
                type="text"
                value={project.categories?.join(", ") || ""}
                onChange={(e) =>
                  setProject({
                    ...project,
                    categories: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                className="admin-input"
              />
            </div>
          </div>

          <div>
            <label className="admin-label">Cover / Hero Image</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={project.heroImage}
                onChange={(e) => setProject({ ...project, heroImage: e.target.value })}
                className="admin-input font-mono !text-xs"
              />
              <button
                type="button"
                onClick={() => setMediaPickerField("heroImage")}
                className="admin-btn admin-btn-secondary !py-2 !px-3 !text-xs text-[#b8ff2c]"
              >
                <Image className="w-4 h-4" />
                <span>Select Media</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Builder */}
        <div className="admin-card">
          <DynamicMetricBuilder
            metrics={project.metrics || []}
            onChange={(metrics) => setProject({ ...project, metrics })}
          />
        </div>

        {/* Narrative & Case Study Content */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Transformation Story</div>
          <div>
            <label className="admin-label">The Challenge</label>
            <textarea
              rows={3}
              value={project.challenge}
              onChange={(e) => setProject({ ...project, challenge: e.target.value })}
              className="admin-textarea"
            />
          </div>

          <div>
            <label className="admin-label">The Solution & Strategy</label>
            <textarea
              rows={3}
              value={project.solution}
              onChange={(e) => setProject({ ...project, solution: e.target.value })}
              className="admin-textarea"
            />
          </div>
        </div>

        <MediaPickerModal
          isOpen={!!mediaPickerField}
          onClose={() => setMediaPickerField(null)}
          onSelect={(url) => {
            if (mediaPickerField === "heroImage") {
              setProject({ ...project, heroImage: url });
            }
          }}
          currentValue={project.heroImage}
        />

        <PublishBar
          onSaveDraft={() => handleSave("draft")}
          onPublish={() => handleSave("published")}
          isSaving={saving}
          isPublishing={saving}
          status={project.status}
        />
      </div>
    </AdminShell>
  );
}
