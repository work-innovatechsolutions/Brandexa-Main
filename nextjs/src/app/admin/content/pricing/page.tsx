"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { CmsPricingPlan } from "@/types/cms";
import { DollarSign, Plus, Edit3, Trash2, Check, X, Star, Loader2 } from "lucide-react";

export default function AdminPricingPage() {
  const { adminProfile } = useAuth();
  const [plans, setPlans] = useState<CmsPricingPlan[]>([]);
  const [editingPlan, setEditingPlan] = useState<CmsPricingPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "pricing"));
      const list: CmsPricingPlan[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...d.data() } as CmsPricingPlan));
      list.sort((a, b) => a.orderIndex - b.orderIndex);
      setPlans(list);
    } catch (e) {
      console.warn("Could not load pricing plans:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;
    setSaving(true);
    try {
      const planId = editingPlan.id || `p_${Date.now()}`;
      const payload: CmsPricingPlan = {
        ...editingPlan,
        id: planId,
        updatedAt: new Date().toISOString(),
      };
      await setDoc(doc(db, "pricing", planId), payload);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          editingPlan.id ? "Updated" : "Created",
          "pricing",
          planId,
          `Saved pricing plan '${editingPlan.planName}'`
        );
      }
      setEditingPlan(null);
      await loadPlans();
    } catch (err) {
      console.error("Save pricing error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete pricing tier '${name}'?`)) return;
    try {
      await deleteDoc(doc(db, "pricing", id));
      setPlans((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const handleCreateNew = () => {
    setEditingPlan({
      id: "",
      planName: "Growth Tier",
      price: "$4,500",
      billingPeriod: "per month",
      description: "Comprehensive marketing and creative development.",
      features: ["Custom Next.js Web App", "Meta & Google Ads", "Weekly Sprints"],
      isFeatured: false,
      ctaText: "Choose Plan",
      ctaUrl: "#book-consultation",
      orderIndex: plans.length,
      isVisible: true,
      updatedAt: new Date().toISOString(),
    });
  };

  return (
    <AdminShell title="Pricing Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Pricing Plans & Packages</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Edit pricing tiers, highlighted features, badges, and call-to-action destinations.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCreateNew}
            className="admin-btn admin-btn-primary !py-2 !px-3.5 !text-xs self-start"
          >
            <Plus className="w-4 h-4" />
            <span>Add Pricing Plan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`admin-card flex flex-col justify-between relative ${
                plan.isFeatured ? "border-[#b8ff2c]/40 bg-[#b8ff2c]/[0.02]" : ""
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#b8ff2c] text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-black" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{plan.planName}</h3>
                  <span className="text-xs text-white/40 font-mono">#{plan.orderIndex + 1}</span>
                </div>

                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-black text-[#b8ff2c]">{plan.price}</span>
                  <span className="text-xs text-white/50 font-medium">/{plan.billingPeriod}</span>
                </div>

                <p className="text-xs text-white/60 mt-3 leading-relaxed">{plan.description}</p>

                <div className="mt-5 space-y-2 pt-4 border-t border-white/8">
                  <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Features</div>
                  {plan.features?.map((f, fIdx) => (
                    <div key={fIdx} className="text-xs text-white/80 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b8ff2c] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/8 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleDelete(plan.id, plan.planName)}
                  className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setEditingPlan(plan)}
                  className="admin-btn admin-btn-primary !py-1.5 !px-3.5 !text-xs"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Plan</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit / Create Modal */}
        {editingPlan && (
          <div className="admin-modal-overlay" onClick={() => setEditingPlan(null)}>
            <div
              className="admin-modal max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">
                  {editingPlan.id ? `Edit Plan: ${editingPlan.planName}` : "Create Pricing Plan"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingPlan(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="admin-label">Plan Name</label>
                    <input
                      type="text"
                      required
                      value={editingPlan.planName}
                      onChange={(e) =>
                        setEditingPlan({ ...editingPlan, planName: e.target.value })
                      }
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-label">Price Tag</label>
                    <input
                      type="text"
                      required
                      value={editingPlan.price}
                      onChange={(e) =>
                        setEditingPlan({ ...editingPlan, price: e.target.value })
                      }
                      className="admin-input font-bold text-[#b8ff2c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="admin-label">Billing Period</label>
                  <input
                    type="text"
                    value={editingPlan.billingPeriod}
                    onChange={(e) =>
                      setEditingPlan({ ...editingPlan, billingPeriod: e.target.value })
                    }
                    placeholder="e.g. per month"
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-label">Description</label>
                  <textarea
                    rows={2}
                    value={editingPlan.description}
                    onChange={(e) =>
                      setEditingPlan({ ...editingPlan, description: e.target.value })
                    }
                    className="admin-textarea"
                  />
                </div>

                <div>
                  <label className="admin-label">Features (1 per line)</label>
                  <textarea
                    rows={4}
                    value={editingPlan.features?.join("\n") || ""}
                    onChange={(e) =>
                      setEditingPlan({
                        ...editingPlan,
                        features: e.target.value.split("\n").filter((l) => l.trim().length > 0),
                      })
                    }
                    placeholder="Feature item 1&#10;Feature item 2"
                    className="admin-textarea font-mono !text-xs"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                    <input
                      type="checkbox"
                      checked={editingPlan.isFeatured}
                      onChange={(e) =>
                        setEditingPlan({ ...editingPlan, isFeatured: e.target.checked })
                      }
                      className="rounded border-white/20 text-[#b8ff2c]"
                    />
                    <span>Highlight as Most Popular / Featured</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-end gap-3 sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setEditingPlan(null)}
                    className="admin-btn admin-btn-secondary !py-2 !px-4 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Plan"}
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
