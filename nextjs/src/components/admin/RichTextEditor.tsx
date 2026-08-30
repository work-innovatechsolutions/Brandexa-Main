"use client";

import React, { useState } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image,
  Eye,
  Edit3,
} from "lucide-react";
import { MediaPickerModal } from "./MediaPickerModal";

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your content here (Markdown supported)...",
  minHeight = "350px",
}: RichTextEditorProps) {
  const [isPreview, setIsPreview] = useState(false);
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false);

  const insertText = (before: string, after: string = "") => {
    const textarea = document.getElementById("cms-rich-textarea") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.substring(start, end);
    const replacement = before + (selected || "text") + after;
    const newValue = value.substring(0, start) + replacement + value.substring(end);

    onChange(newValue);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + (selected.length || 4));
    }, 50);
  };

  const handleInsertImage = (url: string) => {
    insertText(`\n![Image description](${url})\n`);
  };

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
      {/* Toolbar */}
      <div className="p-2 border-b border-white/8 bg-white/[0.02] flex flex-wrap items-center justify-between gap-1">
        <div className="flex items-center gap-1 flex-wrap">
          <button
            type="button"
            onClick={() => insertText("**", "**")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("*", "*")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-4 bg-white/10 mx-1" />
          <button
            type="button"
            onClick={() => insertText("# ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Heading 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("## ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Heading 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("### ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Heading 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-4 bg-white/10 mx-1" />
          <button
            type="button"
            onClick={() => insertText("- ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("1. ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("> ", "")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("```\n", "\n```")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Code Block"
          >
            <Code className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertText("[", "](https://example.com)")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Add Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMediaPickerOpen(true)}
            className="p-1.5 rounded-lg text-[#b8ff2c] hover:bg-[#b8ff2c]/10 transition-colors"
            title="Insert Image from Media Library"
          >
            <Image className="w-4 h-4" />
          </button>
        </div>

        {/* Edit / Preview Toggle */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
              !isPreview ? "bg-[#b8ff2c] text-black" : "text-white/60 hover:text-white"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Write</span>
          </button>
          <button
            type="button"
            onClick={() => setIsPreview(true)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
              isPreview ? "bg-[#b8ff2c] text-black" : "text-white/60 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Editor Body */}
      {isPreview ? (
        <div
          className="p-6 text-white/80 prose prose-invert max-w-none min-h-[350px] overflow-y-auto whitespace-pre-wrap leading-relaxed text-sm"
          style={{ minHeight }}
        >
          {value ? value : <span className="text-white/30 italic">No content to preview yet.</span>}
        </div>
      ) : (
        <textarea
          id="cms-rich-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 bg-transparent text-white font-mono text-sm leading-relaxed outline-none resize-y placeholder:text-white/30"
          style={{ minHeight }}
        />
      )}

      <MediaPickerModal
        isOpen={mediaPickerOpen}
        onClose={() => setMediaPickerOpen(false)}
        onSelect={handleInsertImage}
      />
    </div>
  );
}
