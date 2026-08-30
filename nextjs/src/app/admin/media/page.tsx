"use client";

import React, { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { collection, getDocs, doc, setDoc, deleteDoc, query, orderBy, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { logActivity } from "@/lib/firebase/activity";
import { MediaAsset, MediaFolder } from "@/types/cms";
import {
  Image as ImageIcon,
  Folder,
  Upload,
  Search,
  Grid,
  List as ListIcon,
  Trash2,
  Copy,
  Check,
  X,
  ExternalLink,
  Info,
  AlertTriangle,
  Loader2,
  Plus,
} from "lucide-react";

export default function AdminMediaLibraryPage() {
  const { adminProfile } = useAuth();
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [folders, setFolders] = useState<MediaFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [activeAsset, setActiveAsset] = useState<MediaAsset | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newFolderModalOpen, setNewFolderModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  useEffect(() => {
    loadMedia();
  }, []);

  const DEFAULT_FOLDERS: MediaFolder[] = [
    { id: "f1", name: "Brand Assets", slug: "brand-assets", assetCount: 0, createdAt: "" },
    { id: "f2", name: "Website", slug: "website", assetCount: 0, createdAt: "" },
    { id: "f3", name: "Blog Posts", slug: "blog", assetCount: 0, createdAt: "" },
    { id: "f4", name: "Projects & Portfolio", slug: "projects", assetCount: 0, createdAt: "" },
    { id: "f5", name: "Team", slug: "team", assetCount: 0, createdAt: "" },
    { id: "f6", name: "Testimonials", slug: "testimonials", assetCount: 0, createdAt: "" },
  ];

  const DEFAULT_SYSTEM_MEDIA: MediaAsset[] = [
    { id: "p1", fileUrl: "/wp-content/uploads/2024/11/project-1-2.webp", filename: "project-1-2.webp", mimeType: "image/webp", sizeBytes: 56866, folder: "projects", altText: "Dynamic E-Commerce Platform", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p2", fileUrl: "/wp-content/uploads/2024/11/project-2-3.webp", filename: "project-2-3.webp", mimeType: "image/webp", sizeBytes: 39456, folder: "projects", altText: "Innovative Identity Design", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p3", fileUrl: "/wp-content/uploads/2024/11/project-3-2.webp", filename: "project-3-2.webp", mimeType: "image/webp", sizeBytes: 38562, folder: "projects", altText: "Dynamic Digital Campaign", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p4", fileUrl: "/wp-content/uploads/2024/11/project-4-2.webp", filename: "project-4-2.webp", mimeType: "image/webp", sizeBytes: 64942, folder: "projects", altText: "Impactful Content Creation", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p5", fileUrl: "/wp-content/uploads/2024/11/project-5-2.webp", filename: "project-5-2.webp", mimeType: "image/webp", sizeBytes: 45358, folder: "projects", altText: "Visionary Growth Strategy", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p6", fileUrl: "/wp-content/uploads/2024/11/project-6-2.webp", filename: "project-6-2.webp", mimeType: "image/webp", sizeBytes: 60888, folder: "projects", altText: "Interactive Website Redesign", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p7", fileUrl: "/wp-content/uploads/2024/11/project-7-2.webp", filename: "project-7-2.webp", mimeType: "image/webp", sizeBytes: 69054, folder: "projects", altText: "Digital Solutions Platform", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p8", fileUrl: "/wp-content/uploads/2024/11/project-8-2.webp", filename: "project-8-2.webp", mimeType: "image/webp", sizeBytes: 31176, folder: "projects", altText: "Future Leaders Program", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "p9", fileUrl: "/wp-content/uploads/2024/11/project-9-2.webp", filename: "project-9-2.webp", mimeType: "image/webp", sizeBytes: 39456, folder: "projects", altText: "Smart Process Optimization", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b1", fileUrl: "/wp-content/uploads/2024/11/post-1-3.webp", filename: "post-1-3.webp", mimeType: "image/webp", sizeBytes: 59732, folder: "blog", altText: "UI/UX Design Principles", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b2", fileUrl: "/wp-content/uploads/2024/11/post-2-3.webp", filename: "post-2-3.webp", mimeType: "image/webp", sizeBytes: 65882, folder: "blog", altText: "Mobile Optimized Website", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b3", fileUrl: "/wp-content/uploads/2024/11/post-3-2.webp", filename: "post-3-2.webp", mimeType: "image/webp", sizeBytes: 55880, folder: "blog", altText: "Web Development Essentials", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b4", fileUrl: "/wp-content/uploads/2024/11/post-4-2.webp", filename: "post-4-2.webp", mimeType: "image/webp", sizeBytes: 43048, folder: "blog", altText: "Social Media Strategy", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b5", fileUrl: "/wp-content/uploads/2024/11/post-5-2.webp", filename: "post-5-2.webp", mimeType: "image/webp", sizeBytes: 89526, folder: "blog", altText: "Digital Landscape", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "b6", fileUrl: "/wp-content/uploads/2024/11/post-6-2.webp", filename: "post-6-2.webp", mimeType: "image/webp", sizeBytes: 77730, folder: "blog", altText: "Modern Analytics", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "h1", fileUrl: "/wp-content/uploads/2024/11/hero-bg-2-2.webp", filename: "hero-bg-2-2.webp", mimeType: "image/webp", sizeBytes: 90876, folder: "website", altText: "Hero Background", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "h2", fileUrl: "/wp-content/uploads/2024/11/page-header-bg-2.webp", filename: "page-header-bg-2.webp", mimeType: "image/webp", sizeBytes: 70032, folder: "website", altText: "Page Header Background", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "l1", fileUrl: "/brandlogo2_cropped.png", filename: "brandlogo2_cropped.png", mimeType: "image/png", sizeBytes: 25000, folder: "brand-assets", altText: "Brandexa Logo", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "t1", fileUrl: "/wp-content/uploads/2024/11/team-1-2.webp", filename: "team-1-2.webp", mimeType: "image/webp", sizeBytes: 19010, folder: "team", altText: "Team Member 1", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "t2", fileUrl: "/wp-content/uploads/2024/11/team-2-2.webp", filename: "team-2-2.webp", mimeType: "image/webp", sizeBytes: 12708, folder: "team", altText: "Team Member 2", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
    { id: "t3", fileUrl: "/wp-content/uploads/2024/11/team-3-2.webp", filename: "team-3-2.webp", mimeType: "image/webp", sizeBytes: 16180, folder: "team", altText: "Team Member 3", uploadedBy: "System", createdAt: "2024-11-01T00:00:00.000Z", updatedAt: "2024-11-01T00:00:00.000Z" },
  ];

  const loadMedia = async () => {
    setLoading(true);
    try {
      // 1. Load Folders
      const fSnap = await getDocs(collection(db, "media_folders"));
      const fList: MediaFolder[] = [];
      fSnap.forEach((d) => fList.push(d.data() as MediaFolder));
      setFolders(fList.length > 0 ? fList : DEFAULT_FOLDERS);

      // 2. Load Assets
      const aSnap = await getDocs(query(collection(db, "media"), orderBy("createdAt", "desc")));
      const aList: MediaAsset[] = [];
      aSnap.forEach((d) => aList.push({ ...d.data(), id: d.id } as MediaAsset));

      // Always merge uploaded assets (first) with system default assets (deduplicating by fileUrl)
      const existingUrls = new Set(aList.map((a) => a.fileUrl));
      const combined = [...aList];
      DEFAULT_SYSTEM_MEDIA.forEach((def) => {
        if (!existingUrls.has(def.fileUrl)) {
          combined.push(def);
        }
      });
      setAssets(combined);
    } catch (e) {
      console.warn("Could not load media:", e);
      setFolders(DEFAULT_FOLDERS);
      setAssets(DEFAULT_SYSTEM_MEDIA);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadProgress(20);

    const folderTarget = selectedFolder === "all" ? "website" : selectedFolder;

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let fileUrl = "";

        // Strategy 1: Server-side API Upload (Fast, reliable, zero CORS)
        try {
          const fd = new FormData();
          fd.append("file", file);
          fd.append("folder", folderTarget);
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            body: fd,
          });
          if (res.ok) {
            const data = await res.json();
            if (data.url) fileUrl = data.url;
          }
        } catch (apiErr) {
          console.warn("API upload failed, trying Firebase Storage:", apiErr);
        }

        // Strategy 2: Firebase Storage fallback
        if (!fileUrl) {
          try {
            const storagePath = `media/${folderTarget}/${Date.now()}_${file.name}`;
            const storageRef = ref(storage, storagePath);
            const uploadTask = uploadBytesResumable(storageRef, file);
            fileUrl = await new Promise<string>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snap) => {
                  const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
                  setUploadProgress(Math.round(progress));
                },
                (err) => reject(err),
                async () => {
                  const url = await getDownloadURL(uploadTask.snapshot.ref);
                  resolve(url);
                }
              );
            });
          } catch (storageErr) {
            console.warn("Firebase Storage failed, using Data URL fallback:", storageErr);
          }
        }

        // Strategy 3: Base64 Data URL fallback
        if (!fileUrl) {
          fileUrl = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => resolve("/brandlogo2_cropped.png");
            reader.readAsDataURL(file);
          });
        }

        const newAsset: Omit<MediaAsset, "id"> = {
          fileUrl,
          filename: file.name,
          mimeType: file.type || "image/jpeg",
          sizeBytes: file.size,
          folder: folderTarget,
          altText: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          uploadedBy: adminProfile?.name || "Admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        let newId = `media_${Date.now()}_${i}`;
        try {
          const docRef = await addDoc(collection(db, "media"), newAsset);
          newId = docRef.id;
        } catch (dbErr) {
          console.warn("Could not save media doc to Firestore, keeping in local state:", dbErr);
        }

        const savedAsset: MediaAsset = { id: newId, ...newAsset };
        setAssets((prev) => [savedAsset, ...prev]);

        if (adminProfile) {
          await logActivity(
            adminProfile.uid,
            adminProfile.name,
            "Uploaded",
            "media",
            newId,
            `Uploaded media asset '${file.name}' to folder '${folderTarget}'`
          );
        }

        setUploadProgress(Math.round(((i + 1) / files.length) * 100));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload. Please try again.");
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (e.target) e.target.value = "";
    }
  };

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    const slug = newFolderName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newFolder: MediaFolder = {
      id: slug,
      name: newFolderName,
      slug,
      assetCount: 0,
      createdAt: new Date().toISOString(),
    };
    await setDoc(doc(db, "media_folders", slug), newFolder);
    setFolders((prev) => [...prev, newFolder]);
    setNewFolderName("");
    setNewFolderModalOpen(false);
  };

  const handleDeleteAsset = async (asset: MediaAsset) => {
    if (!confirm(`Delete asset "${asset.filename}"? This may affect pages referencing this URL.`)) return;
    try {
      await deleteDoc(doc(db, "media", asset.id));
      setAssets((prev) => prev.filter((a) => a.id !== asset.id));
      if (activeAsset?.id === asset.id) setActiveAsset(null);

      if (adminProfile) {
        await logActivity(
          adminProfile.uid,
          adminProfile.name,
          "Deleted",
          "media",
          asset.id,
          `Deleted media asset '${asset.filename}'`
        );
      }
    } catch (e) {
      console.error("Delete asset error:", e);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAssets = assets.filter((asset) => {
    const matchesFolder = selectedFolder === "all" || asset.folder === selectedFolder;
    const matchesQuery =
      asset.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.altText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesQuery;
  });

  return (
    <AdminShell title="Media Library">
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-white">Media Library & Assets</h1>
            <p className="text-xs text-white/50 mt-0.5">
              Central asset management with folders, metadata inspection, and direct Firebase Storage integration.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setNewFolderModalOpen(true)}
              className="admin-btn admin-btn-secondary !py-2 !px-3 !text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>New Folder</span>
            </button>

            <label className="admin-btn admin-btn-primary !py-2 !px-4 !text-xs cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>{uploading ? `Uploading ${uploadProgress}%` : "Upload Assets"}</span>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {/* Toolbar & Folders */}
        <div className="admin-card !p-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Folders Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <button
              type="button"
              onClick={() => setSelectedFolder("all")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFolder === "all"
                  ? "bg-[#b8ff2c] text-black font-bold"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              All Assets ({assets.length})
            </button>
            {folders.map((f) => {
              const count = assets.filter((a) => a.folder === f.slug).length;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFolder(f.slug)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                    selectedFolder === f.slug
                      ? "bg-[#b8ff2c] text-black font-bold"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <Folder className="w-3 h-3" />
                  <span>{f.name}</span>
                  <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search & View Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative min-w-[200px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search assets..."
                className="admin-input !py-1.5 !pl-9 !text-xs"
              />
            </div>

            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1 rounded ${viewMode === "grid" ? "bg-[#b8ff2c] text-black" : "text-white/50"}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-1 rounded ${viewMode === "list" ? "bg-[#b8ff2c] text-black" : "text-white/50"}`}
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid / List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setActiveAsset(asset)}
                className={`group relative rounded-xl border overflow-hidden aspect-square cursor-pointer bg-black/40 transition-all ${
                  activeAsset?.id === asset.id
                    ? "border-[#b8ff2c] ring-2 ring-[#b8ff2c]/40"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <img
                  src={asset.fileUrl}
                  alt={asset.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end">
                  <div className="text-xs font-bold text-white truncate">{asset.filename}</div>
                  <div className="text-[10px] text-white/60 capitalize mt-0.5">{asset.folder}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="admin-card !p-0 overflow-hidden">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Folder</th>
                  <th>Size</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) => (
                  <tr key={asset.id} onClick={() => setActiveAsset(asset)} className="cursor-pointer">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                          <img src={asset.fileUrl} alt={asset.altText} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm font-semibold text-white truncate">{asset.filename}</div>
                      </div>
                    </td>
                    <td>
                      <span className="text-xs text-white/70 capitalize">{asset.folder}</span>
                    </td>
                    <td>
                      <span className="text-xs text-white/50 font-mono">
                        {Math.round(asset.sizeBytes / 1024)} KB
                      </span>
                    </td>
                    <td>
                      <span className="text-[11px] text-white/40 uppercase font-mono">{asset.mimeType}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(asset.fileUrl, asset.id);
                        }}
                        className="p-1.5 rounded-lg text-white/50 hover:text-white"
                      >
                        {copiedId === asset.id ? <Check className="w-4 h-4 text-[#b8ff2c]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Media Detail Drawer Modal */}
        {activeAsset && (
          <div className="admin-modal-overlay" onClick={() => setActiveAsset(null)}>
            <div
              className="admin-modal max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h2 className="text-base font-bold text-white">Asset Details</h2>
                <button
                  type="button"
                  onClick={() => setActiveAsset(null)}
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(88vh-80px)]">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center relative">
                  <img
                    src={activeAsset.fileUrl}
                    alt={activeAsset.altText}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/40">Filename</span>
                    <span className="text-white font-mono">{activeAsset.filename}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/40">Folder</span>
                    <span className="text-[#b8ff2c] font-semibold capitalize">{activeAsset.folder}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/40">File Size</span>
                    <span className="text-white font-mono">{Math.round(activeAsset.sizeBytes / 1024)} KB</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/40">Format</span>
                    <span className="text-white font-mono uppercase">{activeAsset.mimeType}</span>
                  </div>
                  <div className="py-1">
                    <span className="text-white/40 block mb-1">Alt Text / Description</span>
                    <input
                      type="text"
                      value={activeAsset.altText}
                      onChange={(e) => {
                        const updated = { ...activeAsset, altText: e.target.value };
                        setActiveAsset(updated);
                        setDoc(doc(db, "media", activeAsset.id), updated, { merge: true });
                      }}
                      className="admin-input !py-1.5 !text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-between sticky bottom-0 bg-[#0c0c0f]/95 py-2 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => handleDeleteAsset(activeAsset)}
                    className="admin-btn admin-btn-danger !py-1.5 !px-3 !text-xs"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Asset</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(activeAsset.fileUrl, activeAsset.id)}
                    className="admin-btn admin-btn-primary !py-1.5 !px-3.5 !text-xs"
                  >
                    {copiedId === activeAsset.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === activeAsset.id ? "URL Copied!" : "Copy Asset URL"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Folder Modal */}
        {newFolderModalOpen && (
          <div className="admin-modal-overlay" onClick={() => setNewFolderModalOpen(false)}>
            <div
              className="admin-modal max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
                <h3 className="text-sm font-bold text-white">Create New Folder</h3>
                <button onClick={() => setNewFolderModalOpen(false)} className="text-white/50">✕</button>
              </div>
              <form onSubmit={handleCreateFolder} className="p-6 space-y-4">
                <div>
                  <label className="admin-label">Folder Name</label>
                  <input
                    type="text"
                    required
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="e.g. Case Studies 2026"
                    className="admin-input"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setNewFolderModalOpen(false)}
                    className="admin-btn admin-btn-secondary !py-1.5 !text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="admin-btn admin-btn-primary !py-1.5 !text-xs"
                  >
                    Create Folder
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
