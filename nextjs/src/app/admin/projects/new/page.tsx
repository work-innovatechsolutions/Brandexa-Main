"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { DynamicMetricBuilder } from "@/components/admin/DynamicMetricBuilder";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsProject } from "@/types/cms";
import { Layers, Image, ArrowLeft, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AdminNewProjectPage() {
  const router = useRouter();
  const { adminProfile } = useAuth();

  const [project, setProject] = useState<CmsProject>({
    id: "",
    title: "",
    clientName: "",
    slug: "",
    categories: ["Branding & Identity", "Web Design"],
    heroImage: "/wp-content/uploads/2024/11/project-1-2.webp",
    galleryImages: [],
    challenge: "",
    solution: "",
    metrics: [
      { id: "m1", label: "Conversion Rate Increase", value: "+184%" },
      { id: "m2", label: "Page Load Speed", value: "0.4s" },
    ],
    testimonial: {
      quote: "",
      clientName: "",
      clientRole: "",
    },
    isFeatured: false,
    orderIndex: 0,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const [saving, setSaving] = useState(false);
  const [mediaPickerField, setMediaPickerField] = useState<"heroImage" | "gallery" | null>(null);

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setProject((prev) => ({ ...prev, title, slug: prev.slug ? prev.slug : slug }));
  };

  const handleSave = async (status: "draft" | "published") => {
    if (!project.title.trim()) {
      alert("Please provide a project title.");
      return;
    }

    setSaving(true);
    try {
      const projectId = project.slug || `proj_${Date.now()}`;
      const payload: CmsProject = {
        ...project,
        id: projectId,
        status,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "projects", projectId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          status === "published" ? "Published" : "Created Draft",
          "project",
          projectId,
          `${status === "published" ? "Published" : "Created"} case study '${project.title}'`
        );
      }

      router.push("/admin/projects");
    } catch (e) {
      console.error("Save project error:", e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell title="Create Case Study">
      <div className="space-y-6 pb-24 max-w-4xl">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects"
            className="p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl font-extrabold text-white">Create New Case Study</h1>
            <p className="text-xs text-white/50">Add deliverables, client metrics, and transformation story.</p>
          </div>
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
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Dynamic E-Commerce Platform"
                className="admin-input font-bold"
              />
            </div>
            <div>
              <label className="admin-label">Client Name / Brand</label>
              <input
                type="text"
                required
                value={project.clientName}
                onChange={(e) => setProject({ ...project, clientName: e.target.value })}
                placeholder="e.g. Aura Apparel"
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
                placeholder="Branding & Identity, Web Design"
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
            metrics={project.metrics}
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
              placeholder="What obstacles, legacy bottlenecks, or drop-offs was the client experiencing?"
              className="admin-textarea"
            />
          </div>

          <div>
            <label className="admin-label">The Solution & Strategy</label>
            <textarea
              rows={3}
              value={project.solution}
              onChange={(e) => setProject({ ...project, solution: e.target.value })}
              placeholder="How did Brandexa engineer the custom design, frontend platform, or ad funnel?"
              className="admin-textarea"
            />
          </div>
        </div>

        {/* Client Testimonial (Optional) */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Client Testimonial Quote</div>
          <div>
            <label className="admin-label">Quote</label>
            <textarea
              rows={2}
              value={project.testimonial?.quote || ""}
              onChange={(e) =>
                setProject({
                  ...project,
                  testimonial: {
                    ...project.testimonial,
                    quote: e.target.value,
                    clientName: project.testimonial?.clientName || project.clientName,
                    clientRole: project.testimonial?.clientRole || "Founder & CEO",
                  },
                })
              }
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
