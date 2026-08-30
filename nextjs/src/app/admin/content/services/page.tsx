"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsService } from "@/types/cms";
import {
  Sparkles,
  Plus,
  Edit3,
  Trash2,
  Image,
  ExternalLink,
  CheckCircle2,
  X,
  Search,
  Layers,
  ArrowUp,
  ArrowDown,
  Loader2,
} from "lucide-react";

export default function AdminServicesPage() {
  const { adminProfile } = useAuth();
  const [services, setServices] = useState<CmsService[]>([]);
  const [editingService, setEditingService] = useState<CmsService | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerField, setMediaPickerField] = useState<"icon" | "heroImage" | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "services"));
      const list: CmsService[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsService));
      list.sort((a, b) => a.orderIndex - b.orderIndex);
      setServices(list);
    } catch (e) {
      console.warn("Could not load services:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    setSaving(true);
    try {
      const serviceId = editingService.id || editingService.slug || `s_${Date.now()}`;
      const payload: CmsService = {
        ...editingService,
        id: serviceId,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "services", serviceId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          editingService.id ? "Updated" : "Created",
          "service",
          serviceId,
          `${editingService.id ? "Updated" : "Created"} service '${editingService.title}'`
        );
      }

      setEditingService(null);
      await loadServices();
    } catch (err) {
      console.error("Save service error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete service '${title}'?`)) return;
    try {
      await deleteDoc(doc(db, "services", id));
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Deleted",
          "service",
          id,
          `Deleted service '${title}'`
        );
      }
      setServices((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Delete service error:", err);
    }
  };

  const handleCreateNew = () => {
    setEditingService({
      id: "",
      title: "New Agency Service",
      slug: "new-agency-service",
      shortDescription: "Short summary of the service offering.",
      description: "Comprehensive description of capabilities and outcomes.",
      icon: "/wp-content/uploads/2024/11/icon-service-1-1.svg",
      heroImage: "/wp-content/uploads/2024/11/service-single-img-1.jpg",
      capabilities: ["Capability 1", "Capability 2", "Capability 3"],
      process: [
        { step: "01", title: "Discovery", description: "Audit and strategy alignment." },
        { step: "02", title: "Execution", description: "Design and deployment sprints." },
      ],
      benefits: [{ title: "Faster Turnaround", description: "High velocity production." }],
      cta: { title: "Ready to scale?", buttonText: "Get Started", buttonUrl: "#book-consultation" },
      isPublished: true,
      orderIndex: services.length,
      updatedAt: new Date().toISOString(),
    });
  };

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminShell title="Services Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Brandexa Services CMS</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage service cards, dedicated service pages, capabilities, and process steps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="admin-input !py-1.5 !pl-9 !text-xs"
              />
            </div>
            <button
              type="button"
              onClick={handleCreateNew}
              className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Service</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service, idx) => (
            <div key={service.id} className="admin-card flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#b8ff2c]/10 text-[#b8ff2c]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span
                    className={`admin-badge ${
                      service.isPublished ? "admin-badge-published" : "admin-badge-draft"
                    }`}
                  >
                    {service.isPublished ? "Published" : "Draft"}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#b8ff2c] transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs text-white/40 font-mono mt-0.5">/services/{service.slug}</div>
                <p className="text-xs text-white/60 mt-3 line-clamp-2 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/8 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-btn admin-btn-secondary !py-1.5 !px-2.5 !text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleDelete(service.id, service.title)}
                    className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingService(service)}
                    className="admin-btn admin-btn-primary !py-1.5 !px-3 !text-xs"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit / Create Service Modal Drawer */}
        {editingService && (
          <div className="admin-modal-overlay" onClick={() => setEditingService(null)}>
            <div
              className="admin-modal max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between">
                <h2 className="text-base font-bold text-white">
                  {editingService.id ? `Edit Service: ${editingService.title}` : "Create New Service"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveService} className="flex-grow overflow-y-auto p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Service Title</label>
                    <input
                      type="text"
                      required
                      value={editingService.title}
                      onChange={(e) =>
                        setEditingService({
                          ...editingService,
                          title: e.target.value,
                          slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        })
                      }
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-label">URL Slug</label>
                    <input
                      type="text"
                      required
                      value={editingService.slug}
                      onChange={(e) =>
                        setEditingService({ ...editingService, slug: e.target.value })
                      }
                      className="admin-input font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="admin-label">Short Summary (for cards)</label>
                  <textarea
                    rows={2}
                    required
                    value={editingService.shortDescription}
                    onChange={(e) =>
                      setEditingService({ ...editingService, shortDescription: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div>
                  <label className="admin-label">Full Page Description</label>
                  <textarea
                    rows={3}
                    required
                    value={editingService.description}
                    onChange={(e) =>
                      setEditingService({ ...editingService, description: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Icon Image / SVG</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editingService.icon}
                        onChange={(e) =>
                          setEditingService({ ...editingService, icon: e.target.value })
                        }
                        className="admin-input !text-xs font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => setMediaPickerField("icon")}
                        className="p-2 rounded-lg bg-white/5 text-[#b8ff2c]"
                      >
                        <Image className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="admin-label">Hero Cover Image</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editingService.heroImage}
                        onChange={(e) =>
                          setEditingService({ ...editingService, heroImage: e.target.value })
                        }
                        className="admin-input !text-xs font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => setMediaPickerField("heroImage")}
                        className="p-2 rounded-lg bg-white/5 text-[#b8ff2c]"
                      >
                        <Image className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="admin-label">
                    Capabilities (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={editingService.capabilities?.join(", ") || ""}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        capabilities: e.target.value.split(",").map((s) => s.trim()),
                      })
                    }
                    className="admin-input"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                    <input
                      type="checkbox"
                      checked={editingService.isPublished}
                      onChange={(e) =>
                        setEditingService({ ...editingService, isPublished: e.target.checked })
                      }
                      className="rounded border-white/20 text-[#b8ff2c] focus:ring-[#b8ff2c]"
                    />
                    <span>Publish Service Page Live</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingService(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                    <span>Save Service</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <MediaPickerModal
          isOpen={!!mediaPickerField}
          onClose={() => setMediaPickerField(null)}
          onSelect={(url) => {
            if (mediaPickerField && editingService) {
              setEditingService({ ...editingService, [mediaPickerField]: url });
            }
          }}
        />
      </div>
    </AdminShell>
  );
}
