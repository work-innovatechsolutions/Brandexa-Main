"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { SectionEditorCard } from "@/components/admin/SectionEditorCard";
import { PublishBar } from "@/components/admin/PublishBar";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { SectionBlock } from "@/types/cms";
import {
  Sparkles,
  Plus,
  Trash2,
  Image,
  Layers,
  TrendingUp,
  Globe,
  ArrowUp,
  ArrowDown,
  ExternalLink,
} from "lucide-react";

export default function AdminHomePageEditor() {
  const { adminProfile } = useAuth();
  const [sections, setSections] = useState<SectionBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [activeMediaPickerField, setActiveMediaPickerField] = useState<{
    sectionId: string;
    field: string;
  } | null>(null);

  useEffect(() => {
    async function loadSections() {
      try {
        const snap = await getDocs(collection(db, "pages", "home", "sections"));
        const list: SectionBlock[] = [];
        snap.forEach((d) => list.push({ id: d.id, ...d.data() } as SectionBlock));
        list.sort((a, b) => a.orderIndex - b.orderIndex);
        setSections(list);
      } catch (e) {
        console.warn("Could not load homepage sections:", e);
      } finally {
        setLoading(false);
      }
    }
    loadSections();
  }, []);

  const updateSectionContent = (sectionId: string, field: string, value: any) => {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id === sectionId
          ? { ...sec, content: { ...sec.content, [field]: value } }
          : sec
      )
    );
    setHasUnsavedChanges(true);
  };

  const toggleSectionVisibility = (sectionId: string) => {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id === sectionId ? { ...sec, isVisible: !sec.isVisible } : sec
      )
    );
    setHasUnsavedChanges(true);
  };

  const moveSection = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === sections.length - 1) return;

    const newSections = [...sections];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const temp = newSections[index];
    newSections[index] = newSections[targetIndex];
    newSections[targetIndex] = temp;

    const reordered = newSections.map((s, idx) => ({ ...s, orderIndex: idx }));
    setSections(reordered);
    setHasUnsavedChanges(true);
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      for (const sec of sections) {
        await setDoc(doc(db, "pages", "home", "sections", sec.id), {
          ...sec,
          isDraft: true,
          updatedAt: new Date().toISOString(),
        });
      }
      await setDoc(
        doc(db, "pages", "home"),
        {
          sectionsOrder: sections.map((s) => s.id),
          hasDraftChanges: true,
          lastUpdated: new Date().toISOString(),
          updatedBy: adminProfile?.name || "Admin",
        },
        { merge: true }
      );
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Saved Draft",
          "page",
          "home",
          "Saved draft changes for Homepage"
        );
      }
      setHasUnsavedChanges(false);
    } catch (err) {
      console.error("Save draft error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      for (const sec of sections) {
        await setDoc(doc(db, "pages", "home", "sections", sec.id), {
          ...sec,
          isDraft: false,
          updatedAt: new Date().toISOString(),
        });
      }
      await setDoc(
        doc(db, "pages", "home"),
        {
          sectionsOrder: sections.map((s) => s.id),
          hasDraftChanges: false,
          status: "published",
          lastUpdated: new Date().toISOString(),
          updatedBy: adminProfile?.name || "Admin",
        },
        { merge: true }
      );
      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Published",
          "page",
          "home",
          "Published live updates for Homepage"
        );
      }
      setHasUnsavedChanges(false);
    } catch (err) {
      console.error("Publish error:", err);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <AdminShell title="Homepage Content Builder">
      <div className="space-y-6 pb-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Homepage Editor</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Reorder, configure, and edit all sections appearing on the public Brandexa homepage.
            </p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs self-start"
          >
            <span>Preview Public Home</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Sections List */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <SectionEditorCard
              key={section.id}
              index={index}
              id={section.id}
              title={section.title}
              type={section.type}
              isVisible={section.isVisible}
              onToggleVisibility={() => toggleSectionVisibility(section.id)}
            >
              {/* Order Controls */}
              <div className="flex items-center justify-end gap-2 border-b border-white/5 pb-3">
                <span className="text-[11px] text-white/40 font-mono">Move Section:</span>
                <button
                  type="button"
                  disabled={index === 0}
                  onClick={() => moveSection(index, "up")}
                  className="p-1 rounded bg-white/5 text-white/70 hover:text-white disabled:opacity-30"
                  title="Move Up"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  disabled={index === sections.length - 1}
                  onClick={() => moveSection(index, "down")}
                  className="p-1 rounded bg-white/5 text-white/70 hover:text-white disabled:opacity-30"
                  title="Move Down"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 1. Hero Section Content */}
              {section.type === "hero" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Eyebrow Kicker Text</label>
                      <input
                        type="text"
                        value={section.content.eyebrow || ""}
                        onChange={(e) => updateSectionContent(section.id, "eyebrow", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Heading Suffix</label>
                      <input
                        type="text"
                        value={section.content.headingSuffix || ""}
                        onChange={(e) => updateSectionContent(section.id, "headingSuffix", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="admin-label">
                      Rotating Animated Words (Comma-Separated)
                    </label>
                    <input
                      type="text"
                      value={section.content.animatedWords?.join(", ") || ""}
                      onChange={(e) =>
                        updateSectionContent(
                          section.id,
                          "animatedWords",
                          e.target.value.split(",").map((s) => s.trim())
                        )
                      }
                      placeholder="Growth, Leads, Revenue"
                      className="admin-input font-mono text-[#b8ff2c]"
                    />
                  </div>

                  <div>
                    <label className="admin-label">Hero Description</label>
                    <textarea
                      rows={3}
                      value={section.content.description || ""}
                      onChange={(e) => updateSectionContent(section.id, "description", e.target.value)}
                      className="admin-textarea"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Primary CTA Label</label>
                      <input
                        type="text"
                        value={section.content.primaryCtaText || ""}
                        onChange={(e) => updateSectionContent(section.id, "primaryCtaText", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Primary CTA URL</label>
                      <input
                        type="text"
                        value={section.content.primaryCtaUrl || ""}
                        onChange={(e) => updateSectionContent(section.id, "primaryCtaUrl", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Secondary CTA Label</label>
                      <input
                        type="text"
                        value={section.content.secondaryCtaText || ""}
                        onChange={(e) => updateSectionContent(section.id, "secondaryCtaText", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Secondary CTA URL</label>
                      <input
                        type="text"
                        value={section.content.secondaryCtaUrl || ""}
                        onChange={(e) => updateSectionContent(section.id, "secondaryCtaUrl", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="admin-label">Hero Background Image</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={section.content.backgroundMedia || ""}
                        onChange={(e) => updateSectionContent(section.id, "backgroundMedia", e.target.value)}
                        className="admin-input font-mono !text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveMediaPickerField({ sectionId: section.id, field: "backgroundMedia" })}
                        className="admin-btn admin-btn-secondary !py-2 !px-3 !text-xs text-[#b8ff2c]"
                      >
                        <Image className="w-4 h-4" />
                        <span>Select Media</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Services Section */}
              {section.type === "services" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Kicker Title</label>
                      <input
                        type="text"
                        value={section.content.sectionTitle || ""}
                        onChange={(e) => updateSectionContent(section.id, "sectionTitle", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Main Heading</label>
                      <input
                        type="text"
                        value={section.content.heading || ""}
                        onChange={(e) => updateSectionContent(section.id, "heading", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="admin-label">Description</label>
                    <textarea
                      rows={2}
                      value={section.content.description || ""}
                      onChange={(e) => updateSectionContent(section.id, "description", e.target.value)}
                      className="admin-textarea"
                    />
                  </div>
                </div>
              )}

              {/* 3. Statistics Section */}
              {section.type === "stats" && (
                <div className="space-y-3">
                  <label className="admin-label flex items-center justify-between">
                    <span>Homepage Statistics Counters</span>
                    <button
                      type="button"
                      onClick={() => {
                        const statsList = section.content.stats || [];
                        updateSectionContent(section.id, "stats", [
                          ...statsList,
                          { id: `s_${Date.now()}`, value: "100+", label: "New Metric" },
                        ]);
                      }}
                      className="admin-btn admin-btn-secondary !py-1 !px-2.5 !text-xs text-[#b8ff2c]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Statistic</span>
                    </button>
                  </label>

                  <div className="space-y-2">
                    {(section.content.stats || []).map((stat: any, sIdx: number) => (
                      <div key={stat.id || sIdx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/8">
                        <div className="w-32 flex-shrink-0">
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => {
                              const updated = [...section.content.stats];
                              updated[sIdx].value = e.target.value;
                              updateSectionContent(section.id, "stats", updated);
                            }}
                            className="admin-input !py-1.5 !text-xs font-bold text-[#b8ff2c]"
                          />
                        </div>
                        <div className="flex-grow">
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => {
                              const updated = [...section.content.stats];
                              updated[sIdx].label = e.target.value;
                              updateSectionContent(section.id, "stats", updated);
                            }}
                            className="admin-input !py-1.5 !text-xs"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = section.content.stats.filter((_: any, i: number) => i !== sIdx);
                            updateSectionContent(section.id, "stats", updated);
                          }}
                          className="p-1.5 text-white/40 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Our Works Section */}
              {section.type === "our-work" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Kicker Title</label>
                      <input
                        type="text"
                        value={section.content.sectionTitle || ""}
                        onChange={(e) => updateSectionContent(section.id, "sectionTitle", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Main Heading</label>
                      <input
                        type="text"
                        value={section.content.heading || ""}
                        onChange={(e) => updateSectionContent(section.id, "heading", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">&ldquo;See More&rdquo; Button Label</label>
                      <input
                        type="text"
                        value={section.content.seeMoreText || "See More Works"}
                        onChange={(e) => updateSectionContent(section.id, "seeMoreText", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">&ldquo;See More&rdquo; Target Route</label>
                      <input
                        type="text"
                        value={section.content.seeMoreUrl || "/our-work"}
                        onChange={(e) => updateSectionContent(section.id, "seeMoreUrl", e.target.value)}
                        className="admin-input font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Latest Blogs Section */}
              {section.type === "latest-blogs" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Kicker Title</label>
                      <input
                        type="text"
                        value={section.content.sectionTitle || ""}
                        onChange={(e) => updateSectionContent(section.id, "sectionTitle", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Main Heading</label>
                      <input
                        type="text"
                        value={section.content.heading || ""}
                        onChange={(e) => updateSectionContent(section.id, "heading", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">&ldquo;See More&rdquo; Button Label</label>
                      <input
                        type="text"
                        value={section.content.seeMoreText || "See More Blogs"}
                        onChange={(e) => updateSectionContent(section.id, "seeMoreText", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">&ldquo;See More&rdquo; Target Route</label>
                      <input
                        type="text"
                        value={section.content.seeMoreUrl || "/blogs"}
                        onChange={(e) => updateSectionContent(section.id, "seeMoreUrl", e.target.value)}
                        className="admin-input font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 6. CTA Section */}
              {section.type === "cta" && (
                <div className="space-y-4">
                  <div>
                    <label className="admin-label">CTA Headline</label>
                    <input
                      type="text"
                      value={section.content.heading || ""}
                      onChange={(e) => updateSectionContent(section.id, "heading", e.target.value)}
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-label">Description</label>
                    <textarea
                      rows={2}
                      value={section.content.description || ""}
                      onChange={(e) => updateSectionContent(section.id, "description", e.target.value)}
                      className="admin-textarea"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">Button Label</label>
                      <input
                        type="text"
                        value={section.content.buttonText || ""}
                        onChange={(e) => updateSectionContent(section.id, "buttonText", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="admin-label">Button Link / Trigger</label>
                      <input
                        type="text"
                        value={section.content.buttonUrl || ""}
                        onChange={(e) => updateSectionContent(section.id, "buttonUrl", e.target.value)}
                        className="admin-input"
                      />
                    </div>
                  </div>
                </div>
              )}
            </SectionEditorCard>
          ))}
        </div>

        {/* Media Picker Modal */}
        <MediaPickerModal
          isOpen={!!activeMediaPickerField}
          onClose={() => setActiveMediaPickerField(null)}
          onSelect={(url) => {
            if (activeMediaPickerField) {
              updateSectionContent(
                activeMediaPickerField.sectionId,
                activeMediaPickerField.field,
                url
              );
            }
          }}
        />

        {/* Bottom Publish Bar */}
        <PublishBar
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          onPreview={() => window.open("/", "_blank")}
          isSaving={isSaving}
          isPublishing={isPublishing}
          hasUnsavedChanges={hasUnsavedChanges}
        />
      </div>
    </AdminShell>
  );
}
