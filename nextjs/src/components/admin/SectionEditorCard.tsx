"use client";

import React, { useState } from "react";
import { GripVertical, Eye, EyeOff, Trash2, Copy, ChevronDown, ChevronUp } from "lucide-react";

interface SectionEditorCardProps {
  index: number;
  id: string;
  title: string;
  type: string;
  isVisible: boolean;
  onToggleVisibility: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  children: React.ReactNode;
}

export function SectionEditorCard({
  index,
  id,
  title,
  type,
  isVisible,
  onToggleVisibility,
  onDelete,
  onDuplicate,
  children,
}: SectionEditorCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`admin-card !p-0 overflow-hidden transition-all ${
        !isVisible ? "opacity-60 border-dashed" : ""
      }`}
    >
      {/* Section Header */}
      <div className="p-4 bg-white/[0.02] border-b border-white/8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-white/30 cursor-grab hover:text-white/70 px-1" title="Drag to reorder">
            <GripVertical className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-[#b8ff2c] px-2 py-0.5 rounded bg-[#b8ff2c]/10 border border-[#b8ff2c]/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>{title}</span>
              {!isVisible && (
                <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                  Hidden
                </span>
              )}
            </h3>
            <div className="text-[11px] text-white/40 font-mono">Type: {type}</div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleVisibility}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isVisible
                ? "text-[#b8ff2c] hover:bg-[#b8ff2c]/10"
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`}
            title={isVisible ? "Hide section on public site" : "Show section on public site"}
          >
            {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          {onDuplicate && (
            <button
              type="button"
              onClick={onDuplicate}
              className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              title="Duplicate section"
            >
              <Copy className="w-4 h-4" />
            </button>
          )}

          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="p-1.5 rounded-lg text-white/50 hover:text-red-400 hover:bg-white/5 transition-colors"
              title="Delete section"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors ml-1"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      {isExpanded && <div className="p-5 space-y-4">{children}</div>}
    </div>
  );
}
