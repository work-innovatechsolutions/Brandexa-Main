"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { Image, ExternalLink, Sparkles, Layers } from "lucide-react";

export default function AdminAboutPageEditor() {
  const { adminProfile } = useAuth();
  const [content, setContent] = useState({
    heroEyebrow: "ABOUT BRANDEXA",
    heroHeading: "We Engineer High-Performance Digital Growth",
    heroDescription: "Brandexa is a modern digital agency fusing high-end aesthetics with ruthless performance engineering to build market-defining brands.",
    storyTitle: "Our Story",
    storyParagraph1: "Founded with the conviction that most brands suffer from either pretty websites with zero conversion or ugly funnels with zero brand equity.",
    storyParagraph2: "We bridge the gap between world-class visual design and direct-response performance marketing.",
    missionTitle: "Our Mission",
    missionDescription: "To empower visionary founders and market leaders with the digital infrastructure, creative firepower, and acquisition engines needed to dominate their space.",
    visionTitle: "Our Vision",
    visionDescription: "To redefine modern brand engineering by creating digital experiences that inspire reverence and compound revenue.",
    heroImage: "/wp-content/uploads/2024/11/about-agency-bg-3.webp",
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const snap = await getDoc(doc(db, "pages", "about"));
        if (snap.exists() && snap.data().customContent) {
          setContent(snap.data().customContent);
        }
      } catch (e) {
        console.warn("Could not load about page data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleChange = (field: string, value: any) => {
    setContent((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = async (isLive = false) => {
    if (isLive) setIsPublishing(true);
    else setIsSaving(true);

    try {
      await setDoc(
        doc(db, "pages", "about"),
        {
          customContent: content,
          status: isLive ? "published" : "draft",
          hasDraftChanges: !isLive,
          lastUpdated: new Date().toISOString(),
          updatedBy: adminProfile?.name || "Admin",
        },
        { merge: true }
      );

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          isLive ? "Published" : "Saved Draft",
          "page",
          "about",
          `${isLive ? "Published live updates" : "Saved draft"} for About Us Page`
        );
      }
      setHasUnsavedChanges(false);
    } catch (e) {
      console.error("Save error:", e);
    } finally {
      setIsSaving(false);
      setIsPublishing(false);
    }
  };

  return (
    <AdminShell title="About Us Page Editor">
      <div className="space-y-6 pb-20 max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-white">About Us Content Editor</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Edit the agency story, mission, vision, and leadership messaging.
            </p>
          </div>
          <a
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs"
          >
            <span>View Live About</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Banner Section */}
        <div className="admin-card space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-white/5 pb-3">
            <Sparkles className="w-4 h-4 text-[#b8ff2c]" />
            <span>Hero Header</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Eyebrow Kicker</label>
              <input
                type="text"
                value={content.heroEyebrow}
                onChange={(e) => handleChange("heroEyebrow", e.target.value)}
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Hero Heading</label>
              <input
                type="text"
                value={content.heroHeading}
                onChange={(e) => handleChange("heroHeading", e.target.value)}
                className="admin-input"
              />
            </div>
          </div>
          <div>
            <label className="admin-label">Intro Description</label>
            <textarea
              rows={3}
              value={content.heroDescription}
              onChange={(e) => handleChange("heroDescription", e.target.value)}
              className="admin-textarea"
            />
          </div>
          <div>
            <label className="admin-label">Hero Graphic / Image</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={content.heroImage}
                onChange={(e) => handleChange("heroImage", e.target.value)}
                className="admin-input font-mono !text-xs"
              />
              <button
                type="button"
                onClick={() => setMediaPickerOpen(true)}
                className="admin-btn admin-btn-secondary !py-2 !px-3 !text-xs text-[#b8ff2c]"
              >
                <Image className="w-4 h-4" />
                <span>Select Media</span>
              </button>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="admin-card space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-white/5 pb-3">
            <Layers className="w-4 h-4 text-[#b8ff2c]" />
            <span>Brand Story</span>
          </div>
          <div>
            <label className="admin-label">Story Heading</label>
            <input
              type="text"
              value={content.storyTitle}
              onChange={(e) => handleChange("storyTitle", e.target.value)}
              className="admin-input"
            />
          </div>
          <div>
            <label className="admin-label">Story Paragraph 1</label>
            <textarea
              rows={3}
              value={content.storyParagraph1}
              onChange={(e) => handleChange("storyParagraph1", e.target.value)}
              className="admin-textarea"
            />
          </div>
          <div>
            <label className="admin-label">Story Paragraph 2</label>
            <textarea
              rows={3}
              value={content.storyParagraph2}
              onChange={(e) => handleChange("storyParagraph2", e.target.value)}
              className="admin-textarea"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="admin-card space-y-3">
            <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Our Mission</div>
            <div>
              <label className="admin-label">Mission Title</label>
              <input
                type="text"
                value={content.missionTitle}
                onChange={(e) => handleChange("missionTitle", e.target.value)}
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Mission Statement</label>
              <textarea
                rows={3}
                value={content.missionDescription}
                onChange={(e) => handleChange("missionDescription", e.target.value)}
                className="admin-textarea"
              />
            </div>
          </div>

          <div className="admin-card space-y-3">
            <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Our Vision</div>
            <div>
              <label className="admin-label">Vision Title</label>
              <input
                type="text"
                value={content.visionTitle}
                onChange={(e) => handleChange("visionTitle", e.target.value)}
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Vision Statement</label>
              <textarea
                rows={3}
                value={content.visionDescription}
                onChange={(e) => handleChange("visionDescription", e.target.value)}
                className="admin-textarea"
              />
            </div>
          </div>
        </div>

        <MediaPickerModal
          isOpen={mediaPickerOpen}
          onClose={() => setMediaPickerOpen(false)}
          onSelect={(url) => handleChange("heroImage", url)}
          currentValue={content.heroImage}
        />

        <PublishBar
          onSaveDraft={() => handleSave(false)}
          onPublish={() => handleSave(true)}
          onPreview={() => window.open("/about", "_blank")}
          isSaving={isSaving}
          isPublishing={isPublishing}
          hasUnsavedChanges={hasUnsavedChanges}
        />
      </div>
    </AdminShell>
  );
}
