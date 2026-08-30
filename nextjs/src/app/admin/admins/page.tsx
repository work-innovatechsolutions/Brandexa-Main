"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { AdminUser, AdminRole } from "@/types/cms";
import { ShieldCheck, UserPlus, UserX, Shield, Edit3, X, Loader2, Check, Copy, ExternalLink, Mail, Trash2 } from "lucide-react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function AdminUsersPage() {
  const { adminProfile, isSuperAdmin } = useAuth();
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteResult, setInviteResult] = useState<{
    email: string;
    inviteUrl: string;
    name: string;
    role: string;
    emailSent: boolean;
    statusMessage: string;
  } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    name: "",
    email: "",
    role: "editor" as AdminRole,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "admins"));
      const list: AdminUser[] = [];
      snap.forEach((d) => list.push({ uid: d.id, ...d.data() } as AdminUser));
      setAdmins(list);
    } catch (e) {
      console.warn("Could not load admins list:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteForm.email.trim()) return;

    setSaving(true);
    try {
      const cleanEmail = inviteForm.email.trim().toLowerCase();
      const mockUid = `inv_${Date.now()}`;
      const newAdmin: AdminUser = {
        uid: mockUid,
        name: inviteForm.name || cleanEmail.split("@")[0],
        email: cleanEmail,
        role: inviteForm.role,
        status: "active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "admins", mockUid), newAdmin);

      let emailSent = false;
      let statusMessage = "";

      // Call API route
      let inviteUrl = `${window.location.origin}/admin/login?email=${encodeURIComponent(cleanEmail)}&role=${encodeURIComponent(inviteForm.role)}`;
      try {
        const res = await fetch("/api/admin/invite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: cleanEmail,
            name: newAdmin.name,
            role: newAdmin.role,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.inviteUrl) inviteUrl = data.inviteUrl;
          if (data.emailSent) emailSent = true;
          if (data.message) statusMessage = data.message;
        }
      } catch (apiErr) {
        console.warn("Invite API call:", apiErr);
      }

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Invited Admin",
          "admin",
          mockUid,
          `Invited '${newAdmin.email}' with role '${newAdmin.role}'`
        );
      }

      setAdmins((prev) => [newAdmin, ...prev]);
      setInviteResult({
        email: cleanEmail,
        inviteUrl,
        name: newAdmin.name,
        role: newAdmin.role,
        emailSent,
        statusMessage,
      });
      setInviteForm({ name: "", email: "", role: "editor" });
      setInviteModalOpen(false);
    } catch (err) {
      console.error("Invite admin error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateRole = async (admin: AdminUser, newRole: AdminRole) => {
    if (!isSuperAdmin) return;
    try {
      await updateDoc(doc(db, "admins", admin.uid), {
        role: newRole,
        updatedAt: new Date().toISOString(),
      });
      setAdmins((prev) =>
        prev.map((a) => (a.uid === admin.uid ? { ...a, role: newRole } : a))
      );
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Changed Role",
          "admin",
          admin.uid,
          `Changed role of '${admin.name}' to '${newRole}'`
        );
      }
    } catch (e) {
      console.error("Update role error:", e);
    }
  };

  const handleToggleStatus = async (admin: AdminUser) => {
    if (!isSuperAdmin) return;
    const newStatus = admin.status === "active" ? "disabled" : "active";
    try {
      await updateDoc(doc(db, "admins", admin.uid), {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });
      setAdmins((prev) =>
        prev.map((a) => (a.uid === admin.uid ? { ...a, status: newStatus } : a))
      );
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Toggled Status",
          "admin",
          admin.uid,
          `Changed status of '${admin.name}' to '${newStatus}'`
        );
      }
    } catch (e) {
      console.error("Toggle status error:", e);
    }
  };

  const handleDeleteAdmin = async (admin: AdminUser) => {
    if (!isSuperAdmin) return;
    if (admin.uid === adminProfile?.uid) {
      alert("You cannot delete your own active administrator account.");
      return;
    }
    if (!confirm(`Are you sure you want to permanently delete '${admin.name}' (${admin.email})?`)) {
      return;
    }

    try {
      await deleteDoc(doc(db, "admins", admin.uid));
      setAdmins((prev) => prev.filter((a) => a.uid !== admin.uid));
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Deleted Admin",
          "admin",
          admin.uid,
          `Deleted admin account '${admin.name}' (${admin.email})`
        );
      }
    } catch (err) {
      console.error("Delete admin error:", err);
      alert("Failed to delete admin. Please try again.");
    }
  };

  return (
    <AdminShell title="Admins & Roles">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Administrators & Permissions</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage workspace members, assign RBAC access levels, and invite team members.
            </p>
          </div>

          {isSuperAdmin && (
            <button
              type="button"
              onClick={() => setInviteModalOpen(true)}
              className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs self-start"
            >
              <UserPlus className="w-4 h-4" />
              <span>Invite Administrator</span>
            </button>
          )}
        </div>

        {/* Admins Table */}
        <div className="admin-card !p-0 overflow-hidden">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Administrator</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Permissions Control</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.uid}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center text-sm font-bold text-[#b8ff2c]">
                        {admin.avatarUrl ? (
                          <img src={admin.avatarUrl} alt={admin.name} className="w-full h-full object-cover" />
                        ) : (
                          admin.name?.charAt(0) || "A"
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{admin.name}</div>
                        <div className="text-xs text-white/40">{admin.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        admin.role === "super_admin"
                          ? "bg-[#b8ff2c]/10 text-[#b8ff2c] border-[#b8ff2c]/30"
                          : admin.role === "editor"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                          : "bg-white/10 text-white/70 border-white/20"
                      }`}
                    >
                      {admin.role.replace("_", " ")}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`admin-badge ${
                        admin.status === "active" ? "admin-badge-published" : "admin-badge-archived"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td>
                    <span className="text-xs text-white/40 font-mono">
                      {admin.lastLoginAt ? new Date(admin.lastLoginAt).toLocaleDateString() : "Never"}
                    </span>
                  </td>
                  <td>
                    {isSuperAdmin && (
                      <div className="flex items-center gap-2">
                        <select
                          value={admin.role}
                          onChange={(e) => handleUpdateRole(admin, e.target.value as AdminRole)}
                          className="admin-select !py-1 !text-xs !w-auto"
                        >
                          <option value="super_admin">Super Admin</option>
                          <option value="editor">Editor</option>
                          <option value="sales_viewer">Sales Viewer</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(admin)}
                          className={`p-1.5 rounded-lg text-xs font-semibold ${
                            admin.status === "active"
                              ? "text-yellow-400 hover:bg-yellow-500/10"
                              : "text-[#b8ff2c] hover:bg-[#b8ff2c]/10"
                          }`}
                          title={admin.status === "active" ? "Disable user" : "Activate user"}
                        >
                          {admin.status === "active" ? "Disable" : "Activate"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteAdmin(admin)}
                          disabled={admin.uid === adminProfile?.uid}
                          className="p-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/15 transition-colors flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Permanently remove administrator"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Invite Modal */}
        {inviteModalOpen && (
          <div className="admin-modal-overlay" onClick={() => setInviteModalOpen(false)}>
            <div
              className="admin-modal max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">Invite Team Member</h2>
                <button onClick={() => setInviteModalOpen(false)} className="text-white/50">✕</button>
              </div>

              <form onSubmit={handleInvite} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div>
                  <label className="admin-label">Full Name</label>
                  <input
                    type="text"
                    required
                    value={inviteForm.name}
                    onChange={(e) => setInviteForm({ ...inviteForm, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Work Email Address</label>
                  <input
                    type="email"
                    required
                    value={inviteForm.email}
                    onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                    placeholder="member@brandexagrowth.com"
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Assigned Role</label>
                  <select
                    value={inviteForm.role}
                    onChange={(e) =>
                      setInviteForm({ ...inviteForm, role: e.target.value as AdminRole })
                    }
                    className="admin-select"
                  >
                    <option value="editor">Editor (Can edit all content & blogs)</option>
                    <option value="super_admin">Super Admin (Full system access)</option>
                    <option value="sales_viewer">Sales Viewer (Read-only)</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setInviteModalOpen(false)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Invitation"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Invitation Generated Modal with Copyable Direct Link */}
        {inviteResult && (
          <div
            className="admin-modal-overlay"
            onClick={() => setInviteResult(null)}
          >
            <div
              className="admin-modal max-w-lg w-full !p-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#b8ff2c]/15 border border-[#b8ff2c]/30 flex items-center justify-center text-[#b8ff2c]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Administrator Authorized</h2>
                    <p className="text-xs text-white/50">{inviteResult.name} ({inviteResult.email})</p>
                  </div>
                </div>
                <button
                  onClick={() => setInviteResult(null)}
                  className="text-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="p-4 rounded-xl bg-[#b8ff2c]/5 border border-[#b8ff2c]/20 text-xs text-white/80 space-y-2">
                  <div className="font-bold text-[#b8ff2c] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Role '{inviteResult.role.replace("_", " ")}' assigned & recorded in Firestore.</span>
                  </div>
                  {inviteResult.emailSent ? (
                    <p className="text-emerald-400 text-[11px] leading-relaxed">
                      ✓ An invitation email was dispatched to <strong>{inviteResult.email}</strong>.
                    </p>
                  ) : (
                    <p className="text-white/60 leading-relaxed">
                      You can copy and share the direct access link below with <strong>{inviteResult.email}</strong>. If using Google Login, signing in with that email will immediately grant them access.
                    </p>
                  )}
                </div>

                <div>
                  <label className="admin-label">Direct Invitation & Login Link</label>
                  <div className="flex items-center gap-2 mt-1.5">
                    <input
                      type="text"
                      readOnly
                      value={inviteResult.inviteUrl}
                      className="admin-input !text-xs !font-mono select-all"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(inviteResult.inviteUrl);
                        setCopiedLink(true);
                        setTimeout(() => setCopiedLink(false), 3000);
                      }}
                      className="admin-btn admin-btn-primary !py-2 !px-4 !text-xs flex items-center gap-1.5 flex-shrink-0"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-black" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <a
                    href={inviteResult.inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs flex items-center gap-1.5"
                  >
                    <span>Test Login Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setInviteResult(null)}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
