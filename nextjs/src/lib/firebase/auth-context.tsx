"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "./client";
import { AdminUser, AdminRole } from "@/types/cms";

interface AuthContextType {
  user: User | null;
  adminProfile: AdminUser | null;
  loading: boolean;
  role: AdminRole | null;
  authError: string | null;
  isSuperAdmin: boolean;
  isEditor: boolean;
  canEdit: boolean;
  canManageAdmins: boolean;
  canPublish: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to look up an admin record either by UID or by normalized Email
async function findAdminRecord(uid: string, email: string): Promise<{ id: string; data: AdminUser } | null> {
  const cleanEmail = email.toLowerCase().trim();

  // 1. Check direct doc by UID
  try {
    const directSnap = await getDoc(doc(db, "admins", uid));
    if (directSnap.exists()) {
      return { id: directSnap.id, data: directSnap.data() as AdminUser };
    }
  } catch {
    // Continue to email check
  }

  // 2. Check by email in admins collection
  if (cleanEmail) {
    try {
      const q = query(collection(db, "admins"), where("email", "==", cleanEmail));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return { id: snap.docs[0].id, data: snap.docs[0].data() as AdminUser };
      }
    } catch {
      // Ignore
    }
  }

  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [adminProfile, setAdminProfile] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearAuthError = () => setAuthError(null);

  // Authorize and link the Firebase user to an admin profile
  const authorizeUser = async (
    firebaseUser: User
  ): Promise<{ ok: true; profile: AdminUser } | { ok: false; message: string }> => {
    const email = (firebaseUser.email || "").toLowerCase().trim();
    if (!email) {
      return { ok: false, message: "No email address found for this account." };
    }

    const record = await findAdminRecord(firebaseUser.uid, email);

    if (!record) {
      // User is NOT in the invited admins list -> DENY ACCESS
      return {
        ok: false,
        message: `Access Denied: The account "${email}" has not been invited as an administrator. Please contact a Super Admin for an invitation.`,
      };
    }

    if (record.data.status === "disabled") {
      return {
        ok: false,
        message: `Access Denied: The administrator account for "${email}" has been disabled. Please contact a Super Admin.`,
      };
    }

    // Prepare canonical profile at admins/${firebaseUser.uid}
    const canonicalProfile: AdminUser = {
      uid: firebaseUser.uid,
      name: record.data.name || firebaseUser.displayName || email.split("@")[0],
      email: email,
      avatarUrl: firebaseUser.photoURL || record.data.avatarUrl || "",
      role: record.data.role || "editor",
      status: "active",
      createdAt: record.data.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    };

    try {
      // Save to canonical document
      const canonicalRef = doc(db, "admins", firebaseUser.uid);
      await setDoc(canonicalRef, canonicalProfile, { merge: true });

      // Clean up temporary invitation document if ID was different (e.g. inv_...)
      if (record.id !== firebaseUser.uid) {
        await deleteDoc(doc(db, "admins", record.id)).catch(() => {});
      }
    } catch {
      // Even if write fails, keep profile in memory
    }

    return { ok: true, profile: canonicalProfile };
  };

  useEffect(() => {
    let unsubSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      if (unsubSnapshot) {
        unsubSnapshot();
        unsubSnapshot = null;
      }

      if (firebaseUser) {
        const authRes = await authorizeUser(firebaseUser);
        if (authRes.ok) {
          setUser(firebaseUser);
          setAdminProfile(authRes.profile);
          setAuthError(null);

          // Listen for real-time changes to the admin's profile / status / role
          unsubSnapshot = onSnapshot(doc(db, "admins", firebaseUser.uid), (snap) => {
            if (snap.exists()) {
              const updated = snap.data() as AdminUser;
              if (updated.status === "disabled") {
                fbSignOut(auth);
                setUser(null);
                setAdminProfile(null);
                setAuthError("Your administrator account has been disabled.");
              } else {
                setAdminProfile(updated);
              }
            } else {
              fbSignOut(auth);
              setUser(null);
              setAdminProfile(null);
              setAuthError("Your administrator account has been removed.");
            }
          });
        } else {
          // Unauthorized user -> sign out quietly without throwing an exception
          await fbSignOut(auth);
          setUser(null);
          setAdminProfile(null);
          setAuthError(authRes.message);
        }
        setLoading(false);
      } else {
        setUser(null);
        setAdminProfile(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubSnapshot) unsubSnapshot();
    };
  }, []);

  const loginWithEmail = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    setAuthError(null);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), pass);
      const authRes = await authorizeUser(cred.user);
      if (authRes.ok) {
        setUser(cred.user);
        setAdminProfile(authRes.profile);
        return { success: true };
      } else {
        await fbSignOut(auth);
        setUser(null);
        setAdminProfile(null);
        setAuthError(authRes.message);
        return { success: false, error: authRes.message };
      }
    } catch (err: any) {
      return { success: false, error: err.message || "Failed to sign in." };
    }
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    setAuthError(null);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const cred = await signInWithPopup(auth, provider);
      const authRes = await authorizeUser(cred.user);
      if (authRes.ok) {
        setUser(cred.user);
        setAdminProfile(authRes.profile);
        return { success: true };
      } else {
        await fbSignOut(auth);
        setUser(null);
        setAdminProfile(null);
        setAuthError(authRes.message);
        return { success: false, error: authRes.message };
      }
    } catch (err: any) {
      if (err.code === "auth/popup-closed-by-user") {
        return { success: false, error: "Sign in popup was closed." };
      }
      return { success: false, error: err.message || "Google sign in failed." };
    }
  };

  const logout = async () => {
    await fbSignOut(auth);
    setUser(null);
    setAdminProfile(null);
    setAuthError(null);
  };

  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      await sendPasswordResetEmail(auth, email.trim());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Could not send password reset email." };
    }
  };

  const role = adminProfile?.role || null;
  const isSuperAdmin = role === "super_admin";
  const isEditor = role === "editor" || isSuperAdmin;
  const canEdit = isSuperAdmin || role === "editor";
  const canManageAdmins = isSuperAdmin;
  const canPublish = isSuperAdmin || role === "editor";

  return (
    <AuthContext.Provider
      value={{
        user,
        adminProfile,
        loading,
        role,
        authError,
        isSuperAdmin,
        isEditor,
        canEdit,
        canManageAdmins,
        canPublish,
        loginWithEmail,
        loginWithGoogle,
        logout,
        resetPassword,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}


