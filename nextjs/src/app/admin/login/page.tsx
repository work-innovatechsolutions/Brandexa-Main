"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/firebase/auth-context";
import { Lock, Mail, ArrowRight, Loader2, Sparkles, ShieldCheck, UserCheck } from "lucide-react";
import "@/app/admin/admin.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loginWithEmail, loginWithGoogle, resetPassword, loading: authLoading, authError, clearAuthError } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isResetMode, setIsResetMode] = useState(false);
  const [invitedRole, setInvitedRole] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams) {
      const emailParam = searchParams.get("email");
      const roleParam = searchParams.get("role");
      if (emailParam) setEmail(emailParam);
      if (roleParam) setInvitedRole(roleParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  useEffect(() => {
    if (user && !authLoading && !authError) {
      router.push("/admin/dashboard");
    }
  }, [user, authLoading, authError, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    clearAuthError();
    setMessage(null);
    setLoading(true);

    try {
      if (isResetMode) {
        const res = await resetPassword(email);
        if (res.success) {
          setMessage("Password reset email sent! Check your inbox.");
        } else {
          setError(res.error || "Could not send password reset email.");
        }
      } else {
        const res = await loginWithEmail(email, password);
        if (res.success) {
          router.push("/admin/dashboard");
        } else {
          setError(res.error || "Failed to sign in. Please check your credentials.");
        }
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    clearAuthError();
    setLoading(true);
    try {
      const res = await loginWithGoogle();
      if (res.success) {
        router.push("/admin/dashboard");
      } else if (res.error) {
        setError(res.error);
      }
    } catch {
      setError("Google sign in was interrupted. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b8ff2c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-[#b8ff2c]/30 p-3 mb-4 shadow-[0_0_30px_rgba(184,255,44,0.2)] overflow-hidden">
            <img src="/favicon.png" alt="Brandexa" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Brandexa CMS</h1>
          <p className="text-sm text-white/50 mt-1">
            {isResetMode ? "Reset your administrator password" : "Sign in to manage the public website"}
          </p>
        </div>


        {/* Auth Card */}
        <div className="admin-card !p-8 shadow-2xl backdrop-blur-2xl">
          {invitedRole && (
            <div className="mb-5 p-3.5 rounded-xl bg-[#b8ff2c]/10 border border-[#b8ff2c]/30 text-xs text-white/90 flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-[#b8ff2c] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#b8ff2c]">Administrator Invitation</div>
                <div className="text-white/70 text-[11px] mt-0.5">
                  You've been authorized with the <strong>{invitedRole.replace("_", " ")}</strong> role. Sign in below to enter the admin console.
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-medium flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="flex-grow">{error}</div>
            </div>
          )}


          {message && (
            <div className="mb-5 p-3 rounded-xl bg-[#b8ff2c]/10 border border-[#b8ff2c]/30 text-xs text-[#b8ff2c] font-medium">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="admin-label">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@brandexagrowth.com"
                  className="admin-input !pl-10"
                />
              </div>
            </div>

            {!isResetMode && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="admin-label !mb-0">Password</label>
                  <button
                    type="button"
                    onClick={() => setIsResetMode(true)}
                    className="text-xs text-[#b8ff2c] hover:underline"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="admin-input !pl-10"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="admin-btn admin-btn-primary w-full !py-3 !mt-6"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>{isResetMode ? "Send Reset Link" : "Sign In to Workspace"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {isResetMode ? (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsResetMode(false)}
                className="text-xs text-white/60 hover:text-white"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <>
              <div className="my-6 flex items-center gap-3">
                <div className="flex-grow h-[1px] bg-white/10" />
                <span className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">Or</span>
                <div className="flex-grow h-[1px] bg-white/10" />
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="admin-btn admin-btn-secondary w-full !py-2.5 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google Workspace</span>
              </button>
            </>
          )}
        </div>

        {/* Security Footer */}
        <div className="mt-8 text-center text-xs text-white/40 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#b8ff2c]" />
          <span>Secured with Firebase Authentication & Role Guards</span>
        </div>
      </div>
    </div>
  );
}
