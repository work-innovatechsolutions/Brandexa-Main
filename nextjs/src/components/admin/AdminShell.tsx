"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/firebase/auth-context";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { checkAndSeedDatabase } from "@/lib/firebase/seed";
import "@/app/admin/admin.css";

interface AdminShellProps {
  children: React.ReactNode;
  title?: string;
}

export function AdminShell({ children, title }: AdminShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, adminProfile, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !adminProfile || adminProfile.status === "disabled") && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [user, adminProfile, loading, pathname, router]);

  // Initial automatic seed check
  useEffect(() => {
    if (user && adminProfile) {
      checkAndSeedDatabase();
    }
  }, [user, adminProfile]);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[#b8ff2c]/30 animate-pulse flex items-center justify-center p-2.5 shadow-[0_0_24px_rgba(184,255,44,0.2)] overflow-hidden">
            <img src="/favicon.png" alt="Brandexa" className="w-full h-full object-contain" />
          </div>
          <div className="text-white/60 text-sm font-medium">Loading Brandexa CMS...</div>
        </div>
      </div>
    );
  }


  if (!user && pathname !== "/admin/login") {
    return null;
  }

  return (
    <div className="admin-shell">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="admin-main-wrap">
        <AdminHeader onToggleSidebar={() => setSidebarOpen((prev) => !prev)} title={title} />
        <main className="admin-content-container">
          {children}
        </main>
      </div>
    </div>
  );
}
