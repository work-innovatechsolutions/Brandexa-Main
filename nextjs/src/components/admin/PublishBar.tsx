"use client";

import React, { useState } from "react";
import { Save, Eye, Send, CheckCircle2, Clock, Loader2 } from "lucide-react";

interface PublishBarProps {
  onSaveDraft: () => Promise<void>;
  onPublish: () => Promise<void>;
  onPreview?: () => void;
  isSaving?: boolean;
  isPublishing?: boolean;
  status?: string;
  hasUnsavedChanges?: boolean;
}

export function PublishBar({
  onSaveDraft,
  onPublish,
  onPreview,
  isSaving = false,
  isPublishing = false,
  status = "draft",
  hasUnsavedChanges = false,
}: PublishBarProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePublishClick = () => {
    setShowConfirm(true);
  };

  const confirmPublish = async () => {
    setShowConfirm(false);
    await onPublish();
  };

  return (
    <>
      <div className="admin-publish-bar">
        {/* Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                status === "published"
                  ? "bg-[#b8ff2c] shadow-[0_0_10px_#b8ff2c]"
                  : "bg-amber-400 shadow-[0_0_10px_#fbbf24]"
              }`}
            />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Status: {status}
            </span>
          </div>

          {hasUnsavedChanges && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-amber-300/80 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              <Clock className="w-3 h-3" />
              Unsaved changes
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {onPreview && (
            <button
              type="button"
              onClick={onPreview}
              className="admin-btn admin-btn-secondary !py-2 !px-3.5 !text-xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Preview</span>
            </button>
          )}

          <button
            type="button"
            onClick={onSaveDraft}
            disabled={isSaving || isPublishing}
            className="admin-btn admin-btn-secondary !py-2 !px-3.5 !text-xs"
          >
            {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            <span>{isSaving ? "Saving..." : "Save Draft"}</span>
          </button>

          <button
            type="button"
            onClick={handlePublishClick}
            disabled={isPublishing || isSaving}
            className="admin-btn admin-btn-primary !py-2 !px-4 !text-xs"
          >
            {isPublishing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span>{isPublishing ? "Publishing..." : "Publish Live"}</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="admin-modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="admin-modal max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 text-white mb-2">
              <div className="p-2 rounded-xl bg-[#b8ff2c]/10 text-[#b8ff2c]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold">Publish to Live Website?</h3>
            </div>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">
              These changes will become immediately visible to all visitors on the public Brandexa website.
            </p>
            <div className="flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="admin-btn admin-btn-secondary !py-2 !px-3 !text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmPublish}
                className="admin-btn admin-btn-primary !py-2 !px-4 !text-xs"
              >
                Confirm & Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
