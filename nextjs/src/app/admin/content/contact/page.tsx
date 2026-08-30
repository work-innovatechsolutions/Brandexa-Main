"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { PhoneCall, Mail, MapPin, ExternalLink, Sparkles } from "lucide-react";

export default function AdminContactPageEditor() {
  const { adminProfile } = useAuth();
  const [content, setContent] = useState({
    heroEyebrow: "GET IN TOUCH",
    heroHeading: "Let's Build Something Exceptional Together",
    heroDescription: "Have a project in mind or want to explore how Brandexa can engineer your growth engine? Reach out directly or book a strategy session.",
    contactEmail: "hello@brandexagrowth.com",
    supportEmail: "support@brandexagrowth.com",
    phoneNumber: "+1 (800) 555-0199",
    officeAddress: "742 Evergreen Terrace, Suite 400",
    formHeading: "Send Us a Message",
    formDescription: "Fill out the form below and our leadership team will respond within 24 hours.",
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const snap = await getDoc(doc(db, "pages", "contact"));
        if (snap.exists() && snap.data().customContent) {
          setContent(snap.data().customContent);
        }
      } catch (e) {
        console.warn("Could not load contact page data:", e);
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
        doc(db, "pages", "contact"),
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
          "contact",
          `${isLive ? "Published live updates" : "Saved draft"} for Contact Page`
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
    <AdminShell title="Contact Page Editor">
      <div className="space-y-6 pb-20 max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-white">Contact Page Content</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Edit agency inquiry copy, contact emails, phone numbers, and address details.
            </p>
          </div>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn admin-btn-secondary !py-1.5 !px-3 !text-xs"
          >
            <span>View Live Contact</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Copy */}
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
              <label className="admin-label">Main Heading</label>
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
        </div>

        {/* Direct Contact Channels */}
        <div className="admin-card space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-white/5 pb-3">
            <PhoneCall className="w-4 h-4 text-[#b8ff2c]" />
            <span>Direct Inbound Channels</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Primary Inbound Email</label>
              <input
                type="email"
                value={content.contactEmail}
                onChange={(e) => handleChange("contactEmail", e.target.value)}
                className="admin-input font-medium text-[#b8ff2c]"
              />
            </div>
            <div>
              <label className="admin-label">Direct Phone Line</label>
              <input
                type="text"
                value={content.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="admin-input font-mono"
              />
            </div>
          </div>
          <div>
            <label className="admin-label">Agency Headquarters Address</label>
            <input
              type="text"
              value={content.officeAddress}
              onChange={(e) => handleChange("officeAddress", e.target.value)}
              className="admin-input"
            />
          </div>
        </div>

        <PublishBar
          onSaveDraft={() => handleSave(false)}
          onPublish={() => handleSave(true)}
          onPreview={() => window.open("/contact", "_blank")}
          isSaving={isSaving}
          isPublishing={isPublishing}
          hasUnsavedChanges={hasUnsavedChanges}
        />
      </div>
    </AdminShell>
  );
}
