"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsTeamMember } from "@/types/cms";
import { Users, Plus, Edit3, Trash2, Image, Eye, EyeOff, X, Loader2 } from "lucide-react";

export default function AdminTeamPage() {
  const { adminProfile } = useAuth();
  const [team, setTeam] = useState<CmsTeamMember[]>([]);
  const [editingMember, setEditingMember] = useState<CmsTeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "team"));
      const list: CmsTeamMember[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsTeamMember));
      list.sort((a, b) => a.orderIndex - b.orderIndex);
      setTeam(list);
    } catch (e) {
      console.warn("Could not load team:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;
    setSaving(true);
    try {
      const memberId = editingMember.id || `t_${Date.now()}`;
      const payload: CmsTeamMember = {
        ...editingMember,
        id: memberId,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "team", memberId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          editingMember.id ? "Updated" : "Created",
          "team",
          memberId,
          `Saved team profile '${editingMember.name}'`
        );
      }
      setEditingMember(null);
      await loadTeam();
    } catch (err) {
      console.error("Save team error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete team member '${name}'?`)) return;
    try {
      await deleteDoc(doc(db, "team", id));
      setTeam((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const handleCreateNew = () => {
    setEditingMember({
      id: "",
      name: "New Team Member",
      role: "Growth Specialist",
      bio: "Short biography of achievements, background, and focus areas.",
      avatarUrl: "/wp-content/uploads/2024/11/team-1-2.webp",
      socialLinks: { linkedin: "https://linkedin.com" },
      orderIndex: team.length,
      isVisible: true,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <AdminShell title="Team Directory CMS">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Team Profiles & Leadership</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage executive team cards, biographies, photos, and public visibility.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCreateNew}
            className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs self-start"
          >
            <Plus className="w-4 h-4" />
            <span>Add Team Member</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <div
              key={member.id}
              className={`admin-card flex flex-col justify-between group ${
                !member.isVisible ? "opacity-50" : ""
              }`}
            >
              <div>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-white/5 mb-3.5 relative">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!member.isVisible && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-semibold text-amber-400">
                      Hidden
                    </div>
                  )}
                </div>
                <h3 className="text-base font-bold text-white">{member.name}</h3>
                <div className="text-xs text-[#b8ff2c] font-semibold mt-0.5">{member.role}</div>
                <p className="text-xs text-white/60 mt-2 line-clamp-3 leading-relaxed">{member.bio}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleDelete(member.id, member.name)}
                  className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setEditingMember(member)}
                  className="admin-btn admin-btn-primary !py-1.5 !px-3.5 !text-xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingMember && (
          <div className="admin-modal-overlay" onClick={() => setEditingMember(null)}>
            <div
              className="admin-modal max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">
                  {editingMember.id ? `Edit Member: ${editingMember.name}` : "Add Team Member"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div>
                  <label className="admin-label">Full Name</label>
                  <input
                    type="text"
                    required
                    value={editingMember.name}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, name: e.target.value })
                    }
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Position / Role Title</label>
                  <input
                    type="text"
                    required
                    value={editingMember.role}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, role: e.target.value })
                    }
                    className="admin-input font-medium text-[#b8ff2c]"
                  />
                </div>

                <div>
                  <label className="admin-label">Biography</label>
                  <textarea
                    rows={3}
                    value={editingMember.bio}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, bio: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div>
                  <label className="admin-label">Profile Photo</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editingMember.avatarUrl}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, avatarUrl: e.target.value })
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

                <div>
                  <label className="admin-label">LinkedIn URL</label>
                  <input
                    type="text"
                    value={editingMember.socialLinks?.linkedin || ""}
                    onChange={(e) =>
                      setEditingMember({
                        ...editingMember,
                        socialLinks: { ...editingMember.socialLinks, linkedin: e.target.value },
                      })
                    }
                    className="admin-input font-mono !text-xs"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                    <input
                      type="checkbox"
                      checked={editingMember.isVisible}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, isVisible: e.target.checked })
                      }
                      className="rounded border-white/20 text-[#b8ff2c]"
                    />
                    <span>Visible on public site</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingMember(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Profile"}
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
            if (editingMember) {
              setEditingMember({ ...editingMember, avatarUrl: url });
            }
          }}
          currentValue={editingMember?.avatarUrl}
        />
      </div>
    </AdminShell>
  );
}
