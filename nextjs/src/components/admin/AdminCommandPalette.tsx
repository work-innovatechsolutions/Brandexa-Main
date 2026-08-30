"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  FileText,
  Layers,
  Image,
  Sparkles,
  Settings,
  X,
  ExternalLink,
  PlusCircle,
} from "lucide-react";

interface AdminCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminCommandPalette({ isOpen, onClose }: AdminCommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: "Homepage Editor", category: "Pages", href: "/admin/content/home", icon: Home },
    { label: "About Us Editor", category: "Pages", href: "/admin/content/about", icon: Home },
    { label: "Services CMS", category: "Pages", href: "/admin/content/services", icon: Sparkles },
    { label: "Pricing CMS", category: "Pages", href: "/admin/content/pricing", icon: Layers },
    { label: "Create New Blog Post", category: "Blogs", href: "/admin/blogs/new", icon: PlusCircle },
    { label: "All Blog Posts", category: "Blogs", href: "/admin/blogs", icon: FileText },
    { label: "Create New Project", category: "Projects", href: "/admin/projects/new", icon: PlusCircle },
    { label: "All Projects & Case Studies", category: "Projects", href: "/admin/projects", icon: Layers },
    { label: "Media Library", category: "Assets", href: "/admin/media", icon: Image },
    { label: "Global Settings", category: "Admin", href: "/admin/settings", icon: Settings },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div
        className="admin-modal max-w-xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-white/8 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#b8ff2c]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search pages, blogs, projects..."
            className="flex-grow bg-transparent text-white text-base outline-none placeholder:text-white/40"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-white/50 bg-white/10 rounded border border-white/15">
            ESC
          </kbd>
          <button type="button" onClick={onClose} className="text-white/50 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-white/50">
              No matching pages or commands found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-left text-white/80 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#b8ff2c]/10 text-white/70 group-hover:text-[#b8ff2c] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-white/40">{item.category}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#b8ff2c] transition-opacity" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
