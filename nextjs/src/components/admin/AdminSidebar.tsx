"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/firebase/auth-context";
import {
  LayoutDashboard,
  Globe,
  Home,
  Info,
  Sparkles,
  Layers,
  FileText,
  MessageSquareQuote,
  Image,
  Search,
  Users,
  Settings,
  DollarSign,
  HelpCircle,
  PhoneCall,
  LogOut,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const { adminProfile, logout, isSuperAdmin } = useAuth();

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") return pathname === "/admin/dashboard";
    return pathname.startsWith(href);
  };

  const navItemClass = (href: string) => {
    const active = isActive(href);
    return `flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
      active
        ? "bg-[#b8ff2c]/10 text-[#b8ff2c] font-semibold border border-[#b8ff2c]/20 shadow-[0_0_12px_rgba(184,255,44,0.15)]"
        : "text-white/70 hover:text-white hover:bg-white/5"
    }`;
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        {/* Brand Header */}
        <div className="p-6 border-b border-white/8 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform overflow-hidden shadow-[0_0_15px_rgba(184,255,44,0.15)]">
              <img src="/favicon.png" alt="Brandexa" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-black tracking-wider text-base">BRANDEXA</div>
              <div className="text-xs text-[#b8ff2c] font-semibold tracking-widest uppercase">Admin Console</div>
            </div>
          </Link>
        </div>


        {/* Scrollable Navigation */}
        <div
          className="admin-sidebar-nav flex-grow overflow-y-auto px-4 py-5 space-y-6 scrollbar-thin"
          onWheel={(e) => {
            e.currentTarget.scrollTop += e.deltaY;
          }}
          style={{ overscrollBehavior: "contain", touchAction: "pan-y" }}
        >
          {/* Overview */}
          <div>
            <div className="text-[11px] font-bold text-white/40 tracking-wider uppercase px-3 mb-2">Overview</div>
            <Link href="/admin/dashboard" className={navItemClass("/admin/dashboard")}>
              <LayoutDashboard className="w-4 h-4 text-white/70" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Website Content */}
          <div>
            <div className="text-[11px] font-bold text-white/40 tracking-wider uppercase px-3 mb-2">Website Pages</div>
            <div className="space-y-1">
              <Link href="/admin/content" className={navItemClass("/admin/content")}>
                <Globe className="w-4 h-4 text-white/70" />
                <span>All Pages</span>
              </Link>
              <Link href="/admin/content/home" className={navItemClass("/admin/content/home")}>
                <Home className="w-4 h-4 text-white/70" />
                <span>Homepage</span>
              </Link>
              <Link href="/admin/content/about" className={navItemClass("/admin/content/about")}>
                <Info className="w-4 h-4 text-white/70" />
                <span>About</span>
              </Link>
              <Link href="/admin/content/services" className={navItemClass("/admin/content/services")}>
                <Sparkles className="w-4 h-4 text-white/70" />
                <span>Services</span>
              </Link>
              <Link href="/admin/content/pricing" className={navItemClass("/admin/content/pricing")}>
                <DollarSign className="w-4 h-4 text-white/70" />
                <span>Pricing</span>
              </Link>
              <Link href="/admin/content/team" className={navItemClass("/admin/content/team")}>
                <Users className="w-4 h-4 text-white/70" />
                <span>Team</span>
              </Link>
              <Link href="/admin/content/faqs" className={navItemClass("/admin/content/faqs")}>
                <HelpCircle className="w-4 h-4 text-white/70" />
                <span>FAQs</span>
              </Link>
              <Link href="/admin/content/contact" className={navItemClass("/admin/content/contact")}>
                <PhoneCall className="w-4 h-4 text-white/70" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Content & Publishing */}
          <div>
            <div className="text-[11px] font-bold text-white/40 tracking-wider uppercase px-3 mb-2">Publishing</div>
            <div className="space-y-1">
              <Link href="/admin/projects" className={navItemClass("/admin/projects")}>
                <Layers className="w-4 h-4 text-white/70" />
                <span>Projects</span>
              </Link>
              <Link href="/admin/blogs" className={navItemClass("/admin/blogs")}>
                <FileText className="w-4 h-4 text-white/70" />
                <span>Blog Posts</span>
              </Link>
              <Link href="/admin/testimonials" className={navItemClass("/admin/testimonials")}>
                <MessageSquareQuote className="w-4 h-4 text-white/70" />
                <span>Testimonials</span>
              </Link>
            </div>
          </div>

          {/* Assets & SEO */}
          <div>
            <div className="text-[11px] font-bold text-white/40 tracking-wider uppercase px-3 mb-2">Assets & SEO</div>
            <div className="space-y-1">
              <Link href="/admin/media" className={navItemClass("/admin/media")}>
                <Image className="w-4 h-4 text-white/70" />
                <span>Media Library</span>
              </Link>
              <Link href="/admin/seo" className={navItemClass("/admin/seo")}>
                <Search className="w-4 h-4 text-white/70" />
                <span>SEO Management</span>
              </Link>
            </div>
          </div>

          {/* Administration */}
          <div>
            <div className="text-[11px] font-bold text-white/40 tracking-wider uppercase px-3 mb-2">Administration</div>
            <div className="space-y-1">
              {isSuperAdmin && (
                <Link href="/admin/admins" className={navItemClass("/admin/admins")}>
                  <ShieldCheck className="w-4 h-4 text-white/70" />
                  <span>Admins & Roles</span>
                </Link>
              )}
              <Link href="/admin/settings" className={navItemClass("/admin/settings")}>
                <Settings className="w-4 h-4 text-white/70" />
                <span>Global Settings</span>
              </Link>
            </div>
          </div>
        </div>

        {/* User Footer Profile */}
        <div className="p-4 border-t border-white/8 bg-[#09090b]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center text-sm font-bold flex-shrink-0 text-[#b8ff2c]">
                {adminProfile?.avatarUrl ? (
                  <img src={adminProfile.avatarUrl} alt={adminProfile.name} className="w-full h-full object-cover" />
                ) : (
                  adminProfile?.name?.charAt(0) || "A"
                )}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white truncate">{adminProfile?.name || "Admin"}</div>
                <div className="text-[11px] text-[#b8ff2c] font-medium capitalize truncate">
                  {adminProfile?.role?.replace("_", " ") || "Administrator"}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={logout}
              className="p-2 rounded-lg text-white/50 hover:text-red-400 hover:bg-white/5 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
