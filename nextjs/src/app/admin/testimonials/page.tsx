"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsTestimonial } from "@/types/cms";
import { MessageSquareQuote, Plus, Edit3, Trash2, Star, Image, X, Loader2 } from "lucide-react";

export default function AdminTestimonialsPage() {
  const { adminProfile } = useAuth();
  const [testimonials, setTestimonials] = useState<CmsTestimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<CmsTestimonial | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "testimonials"));
      const list: CmsTestimonial[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsTestimonial));
      list.sort((a, b) => a.orderIndex - b.orderIndex);
      setTestimonials(list);
    } catch (e) {
      console.warn("Could not load testimonials:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    setSaving(true);
    try {
      const tId = editingTestimonial.id || `t_${Date.now()}`;
      const payload: CmsTestimonial = {
        ...editingTestimonial,
        id: tId,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "testimonials", tId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          editingTestimonial.id ? "Updated" : "Created",
          "testimonial",
          tId,
          `Saved review from '${editingTestimonial.clientName}' (${editingTestimonial.company})`
        );
      }
      setEditingTestimonial(null);
      await loadTestimonials();
    } catch (err) {
      console.error("Save testimonial error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, clientName: string) => {
    if (!confirm(`Delete testimonial from '${clientName}'?`)) return;
    try {
      await deleteDoc(doc(db, "testimonials", id));
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const handleCreateNew = () => {
    setEditingTestimonial({
      id: "",
      clientName: "New Client",
      clientRole: "Founder & CEO",
      company: "Company Name",
      quote: "Brandexa transformed our entire digital presence with exceptional speed and precision.",
      rating: 5,
      avatarUrl: "/wp-content/uploads/2024/11/satisfy-client-img-1-2.webp",
      isFeatured: true,
      orderIndex: testimonials.length,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <AdminShell title="Testimonials Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Client Reviews & Testimonials</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage client satisfaction quotes, avatars, ratings, and homepage features.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCreateNew}
            className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs self-start"
          >
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div key={test.id} className="admin-card flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-1 text-[#b8ff2c] mb-3">
                  {[...Array(test.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm text-white/80 italic leading-relaxed">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 mt-5 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                    <img src={test.avatarUrl} alt={test.clientName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{test.clientName}</div>
                    <div className="text-[11px] text-[#b8ff2c] font-medium">{test.clientRole}, {test.company}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleDelete(test.id, test.clientName)}
                    className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingTestimonial(test)}
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

        {/* Edit / Create Modal */}
        {editingTestimonial && (
          <div className="admin-modal-overlay" onClick={() => setEditingTestimonial(null)}>
            <div
              className="admin-modal max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">
                  {editingTestimonial.id ? `Edit Review: ${editingTestimonial.clientName}` : "Add Client Testimonial"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingTestimonial(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Client Name</label>
                    <input
                      type="text"
                      required
                      value={editingTestimonial.clientName}
                      onChange={(e) =>
                        setEditingTestimonial({ ...editingTestimonial, clientName: e.target.value })
                      }
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-label">Company / Brand</label>
                    <input
                      type="text"
                      required
                      value={editingTestimonial.company}
                      onChange={(e) =>
                        setEditingTestimonial({ ...editingTestimonial, company: e.target.value })
                      }
                      className="admin-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Position / Role</label>
                    <input
                      type="text"
                      value={editingTestimonial.clientRole}
                      onChange={(e) =>
                        setEditingTestimonial({ ...editingTestimonial, clientRole: e.target.value })
                      }
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-label">Star Rating (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={editingTestimonial.rating}
                      onChange={(e) =>
                        setEditingTestimonial({
                          ...editingTestimonial,
                          rating: parseInt(e.target.value, 10) || 5,
                        })
                      }
                      className="admin-input font-bold text-[#b8ff2c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="admin-label">Client Quote</label>
                  <textarea
                    rows={3}
                    required
                    value={editingTestimonial.quote}
                    onChange={(e) =>
                      setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div>
                  <label className="admin-label">Client Avatar Image</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editingTestimonial.avatarUrl}
                      onChange={(e) =>
                        setEditingTestimonial({ ...editingTestimonial, avatarUrl: e.target.value })
                      }
                      className="admin-input font-mono !text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setMediaPickerOpen(true)}
                      className="p-2 rounded-lg bg-white/5 text-[#b8ff2c]"
                    >
                      <Image className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingTestimonial(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Review"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <MediaPickerModal
          isOpen={mediaPickerOpen}
          onClose={() => setMediaPickerOpen(false)}
          onSelect={(url) => {
            if (editingTestimonial) {
              setEditingTestimonial({ ...editingTestimonial, avatarUrl: url });
            }
          }}
          currentValue={editingTestimonial?.avatarUrl}
          folderFilter="testimonials"
        />
      </div>
    </AdminShell>
  );
}
