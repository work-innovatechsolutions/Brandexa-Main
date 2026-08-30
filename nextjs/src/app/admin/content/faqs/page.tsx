"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsFaq } from "@/types/cms";
import { HelpCircle, Plus, Edit3, Trash2, Eye, EyeOff, X, Loader2 } from "lucide-react";

export default function AdminFaqsPage() {
  const { adminProfile } = useAuth();
  const [faqs, setFaqs] = useState<CmsFaq[]>([]);
  const [editingFaq, setEditingFaq] = useState<CmsFaq | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "faqs"));
      const list: CmsFaq[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsFaq));
      list.sort((a, b) => a.orderIndex - b.orderIndex);
      setFaqs(list);
    } catch (e) {
      console.warn("Could not load FAQs:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    setSaving(true);
    try {
      const faqId = editingFaq.id || `f_${Date.now()}`;
      const payload: CmsFaq = {
        ...editingFaq,
        id: faqId,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "faqs", faqId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          editingFaq.id ? "Updated" : "Created",
          "faq",
          faqId,
          `Saved FAQ '${editingFaq.question}'`
        );
      }
      setEditingFaq(null);
      await loadFaqs();
    } catch (err) {
      console.error("Save FAQ error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, question: string) => {
    if (!confirm(`Delete FAQ: "${question}"?`)) return;
    try {
      await deleteDoc(doc(db, "faqs", id));
      setFaqs((prev) => prev.filter((f) => f.id !== id));
    } catch (e) {
      console.error("Delete FAQ error:", e);
    }
  };

  const handleCreateNew = () => {
    setEditingFaq({
      id: "",
      question: "What is your onboarding timeline?",
      answer: "We typically initiate strategy discovery and project setup within 3-5 business days.",
      category: "General",
      orderIndex: faqs.length,
      isVisible: true,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <AdminShell title="FAQs Management">
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Frequently Asked Questions</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Add, edit, reorder, and categorize accordion FAQs displayed across the site.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCreateNew}
            className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs self-start"
          >
            <Plus className="w-4 h-4" />
            <span>Add FAQ</span>
          </button>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`admin-card flex items-start justify-between gap-4 group ${
                !faq.isVisible ? "opacity-50" : ""
              }`}
            >
              <div className="min-w-0 flex-grow">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#b8ff2c] uppercase tracking-wider bg-[#b8ff2c]/10 px-2 py-0.5 rounded border border-[#b8ff2c]/20">
                    {faq.category}
                  </span>
                  {!faq.isVisible && (
                    <span className="text-[10px] text-amber-400 font-semibold uppercase">Hidden</span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#b8ff2c] transition-colors">
                  {faq.question}
                </h3>
                <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{faq.answer}</p>
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleDelete(faq.id, faq.question)}
                  className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setEditingFaq(faq)}
                  className="admin-btn admin-btn-primary !py-1 !px-2.5 !text-xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingFaq && (
          <div className="admin-modal-overlay" onClick={() => setEditingFaq(null)}>
            <div
              className="admin-modal max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">
                  {editingFaq.id ? "Edit Question" : "Add FAQ Question"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingFaq(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div>
                  <label className="admin-label">Category</label>
                  <input
                    type="text"
                    required
                    value={editingFaq.category}
                    onChange={(e) =>
                      setEditingFaq({ ...editingFaq, category: e.target.value })
                    }
                    placeholder="e.g. General, Pricing & Billing, Capabilities"
                    className="admin-input font-medium text-[#b8ff2c]"
                  />
                </div>

                <div>
                  <label className="admin-label">Question Text</label>
                  <input
                    type="text"
                    required
                    value={editingFaq.question}
                    onChange={(e) =>
                      setEditingFaq({ ...editingFaq, question: e.target.value })
                    }
                    className="admin-input font-bold"
                  />
                </div>

                <div>
                  <label className="admin-label">Detailed Answer</label>
                  <textarea
                    rows={4}
                    required
                    value={editingFaq.answer}
                    onChange={(e) =>
                      setEditingFaq({ ...editingFaq, answer: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                    <input
                      type="checkbox"
                      checked={editingFaq.isVisible}
                      onChange={(e) =>
                        setEditingFaq({ ...editingFaq, isVisible: e.target.checked })
                      }
                      className="rounded border-white/20 text-[#b8ff2c]"
                    />
                    <span>Visible on public site</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingFaq(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save FAQ"}
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
