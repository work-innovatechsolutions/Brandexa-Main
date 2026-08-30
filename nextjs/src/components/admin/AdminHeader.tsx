"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, ExternalLink, Sparkles, Database } from "lucide-react";
import { AdminCommandPalette } from "./AdminCommandPalette";
import { checkAndSeedDatabase } from "@/lib/firebase/seed";

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  title?: string;
}

export function AdminHeader({ onToggleSidebar, title }: AdminHeaderProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState<string | null>(null);

  const handleSeed = async () => {
    if (!confirm("Seed or verify initial Brandexa content in Firestore?")) return;
    setSeeding(true);
    const res = await checkAndSeedDatabase();
    setSeeding(false);
    setSeedMessage(res.message);
    setTimeout(() => setSeedMessage(null), 5000);
  };

  return (
    <>
      <header className="admin-header">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5"
          >
            <Menu className="w-5 h-5" />
          </button>
          {title && <h1 className="text-lg font-bold text-white tracking-tight">{title}</h1>}
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Command Launcher */}
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#b8ff2c]" />
            <span>Search or jump to...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/40 border border-white/10">
              Ctrl+K
            </kbd>
          </button>

          {/* Seed Content Helper */}
          <button
            type="button"
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 hover:text-[#b8ff2c] hover:bg-white/10 transition-colors"
            title="Sync / Seed Existing Site Content"
          >
            <Database className="w-3.5 h-3.5 text-[#b8ff2c]" />
            <span className="hidden md:inline">{seeding ? "Syncing..." : "Sync DB"}</span>
          </button>

          {/* Live Public Website Link */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#b8ff2c]/10 border border-[#b8ff2c]/30 text-xs font-semibold text-[#b8ff2c] hover:bg-[#b8ff2c]/20 transition-colors"
          >
            <span className="hidden sm:inline">View Public Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {seedMessage && (
        <div className="bg-[#b8ff2c]/15 border-b border-[#b8ff2c]/30 px-6 py-2 text-xs text-[#b8ff2c] font-medium flex items-center justify-between">
          <span>{seedMessage}</span>
          <button onClick={() => setSeedMessage(null)} className="text-white/50 hover:text-white">✕</button>
        </div>
      )}

      <AdminCommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
