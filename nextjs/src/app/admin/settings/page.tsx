"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { PublishBar } from "@/components/admin/PublishBar";
import { MediaPickerModal } from "@/components/admin/MediaPickerModal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { GlobalSettings } from "@/types/cms";
import { Settings, Globe, Image, Sparkles, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminSettingsPage() {
  const { adminProfile, isSuperAdmin } = useAuth();
  const [settings, setSettings] = useState<GlobalSettings>({
    general: {
      websiteName: "Brandexa Growth",
      tagline: "Digital Growth & Creative Engineering Agency",
      contactEmail: "hello@brandexagrowth.com",
      phone: "+1 (800) 555-0199",
      address: "742 Evergreen Terrace, Suite 400",
      socialLinks: {
        linkedin: "https://www.linkedin.com/company/brandexagrowth/?viewAsMember=true",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://x.com",
      },
      logoUrl: "/brandlogo2_cropped.png",
      faviconUrl: "/brandlogo2_cropped.png",
    },
    header: {
      logoUrl: "/brandlogo2_cropped.png",
      ctaText: "Book a Free Consultation",
      ctaUrl: "#book-consultation",
    },
    footer: {
      description: "Brandexa builds scalable growth engines, high-converting digital platforms, and market-defining creative assets for forward-thinking brands.",
      copyrightText: "© 2026 Brandexa Growth. All rights reserved.",
    },
    globalSeo: {
      defaultTitle: "Brandexa | Digital Growth & Creative Engineering Agency",
      defaultDescription: "Turn attention into measurable revenue with Brandexa's full-funnel digital strategy, web design, and creative production.",
      defaultOgImage: "/wp-content/uploads/2024/11/page-header-bg-2.webp",
    },
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [mediaPickerField, setMediaPickerField] = useState<string | null>(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const snap = await getDoc(doc(db, "settings", "global"));
        if (snap.exists()) {
          setSettings(snap.data() as GlobalSettings);
        }
      } catch (e) {
        console.warn("Could not load settings:", e);
      } finally {
        setLoading(false);
      }
    }
    loadSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await setDoc(doc(db, "settings", "global"), settings);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Updated",
          "settings",
          "global",
          "Updated global website settings and branding configuration"
        );
      }

      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    } catch (err) {
      console.error("Save settings error:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell title="Global Settings">
      <form onSubmit={handleSave} className="space-y-6 pb-20 max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Global Website Configuration</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Manage core brand assets, header/footer configuration, social links, and fallback SEO.
            </p>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="admin-btn admin-btn-primary !py-2 !px-5 !text-xs self-start"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
            <span>{saving ? "Saving..." : "Save Settings"}</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-4 rounded-xl bg-[#b8ff2c]/10 border border-[#b8ff2c]/30 text-xs text-[#b8ff2c] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Global settings successfully updated and saved to Firestore!</span>
          </div>
        )}

        {/* 1. General Branding */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#b8ff2c]" />
            <span>General Brand Identity</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Brand / Agency Name</label>
              <input
                type="text"
                value={settings.general.websiteName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    general: { ...settings.general, websiteName: e.target.value },
                  })
                }
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Tagline</label>
              <input
                type="text"
                value={settings.general.tagline}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    general: { ...settings.general, tagline: e.target.value },
                  })
                }
                className="admin-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Brand Logo Asset URL</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={settings.general.logoUrl}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, logoUrl: e.target.value },
                    })
                  }
                  className="admin-input font-mono !text-xs"
                />
                <button
                  type="button"
                  onClick={() => setMediaPickerField("logoUrl")}
                  className="p-2 rounded-lg bg-white/5 text-[#b8ff2c]"
                >
                  <Image className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="admin-label">Favicon Icon URL</label>
              <input
                type="text"
                value={settings.general.faviconUrl}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    general: { ...settings.general, faviconUrl: e.target.value },
                  })
                }
                className="admin-input font-mono !text-xs"
              />
            </div>
          </div>
        </div>

        {/* 2. Header & CTA */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Header Navigation</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Header Action Button Label</label>
              <input
                type="text"
                value={settings.header.ctaText}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    header: { ...settings.header, ctaText: e.target.value },
                  })
                }
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Header Action Target URL</label>
              <input
                type="text"
                value={settings.header.ctaUrl}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    header: { ...settings.header, ctaUrl: e.target.value },
                  })
                }
                className="admin-input font-mono"
              />
            </div>
          </div>
        </div>

        {/* 3. Footer */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2">Footer Configuration</div>
          <div>
            <label className="admin-label">Footer Tagline & Description</label>
            <textarea
              rows={2}
              value={settings.footer.description}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  footer: { ...settings.footer, description: e.target.value },
                })
              }
              className="admin-textarea"
            />
          </div>
          <div>
            <label className="admin-label">Copyright Notice</label>
            <input
              type="text"
              value={settings.footer.copyrightText}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  footer: { ...settings.footer, copyrightText: e.target.value },
                })
              }
              className="admin-input"
            />
          </div>
        </div>

        {/* 4. Global Fallback SEO */}
        <div className="admin-card space-y-4">
          <div className="text-sm font-bold text-white border-b border-white/5 pb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#b8ff2c]" />
            <span>Global Fallback SEO</span>
          </div>
          <div>
            <label className="admin-label">Default SEO Title</label>
            <input
              type="text"
              value={settings.globalSeo.defaultTitle}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  globalSeo: { ...settings.globalSeo, defaultTitle: e.target.value },
                })
              }
              className="admin-input"
            />
          </div>
          <div>
            <label className="admin-label">Default Meta Description</label>
            <textarea
              rows={2}
              value={settings.globalSeo.defaultDescription}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  globalSeo: { ...settings.globalSeo, defaultDescription: e.target.value },
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
            if (mediaPickerField === "logoUrl") {
              setSettings({
                ...settings,
                general: { ...settings.general, logoUrl: url },
                header: { ...settings.header, logoUrl: url },
              });
            }
          }}
          folderFilter="brand-assets"
        />
      </form>
    </AdminShell>
  );
}
