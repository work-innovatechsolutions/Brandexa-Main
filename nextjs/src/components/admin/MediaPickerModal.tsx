"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase/client";
import { MediaAsset, MediaFolder } from "@/types/cms";
import { Search, Upload, Folder, Image, X, Check, Loader2, Plus } from "lucide-react";

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string, asset?: MediaAsset) => void;
  currentValue?: string;
  folderFilter?: string;
}

export function MediaPickerModal({
  isOpen,
  onClose,
  onSelect,
  currentValue,
  folderFilter,
}: MediaPickerModalProps) {
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [folders, setFolders] = useState<MediaFolder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>(folderFilter || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    loadAssetsAndFolders();
  }, [isOpen]);

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

  const loadAssetsAndFolders = async () => {
    setLoading(true);
    try {
      // 1. Fetch folders
      const fSnap = await getDocs(collection(db, "media_folders"));
      const fList: MediaFolder[] = [];
      fSnap.forEach((d) => fList.push(d.data() as MediaFolder));
      setFolders(fList.length > 0 ? fList : DEFAULT_FOLDERS);

      // 2. Fetch assets from Firestore
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
      console.warn("Could not fetch remote media, using default list:", e);
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
          uploadedBy: "Admin",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        let newId = `media_${Date.now()}_${i}`;
        try {
          const docRef = await addDoc(collection(db, "media"), newAsset);
          newId = docRef.id;
        } catch (dbErr) {
          console.warn("Could not save media document to Firestore, kept in local state:", dbErr);
        }

        setAssets((prev) => [{ id: newId, ...newAsset }, ...prev]);
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

  if (!isOpen) return null;

  const filteredAssets = assets.filter((asset) => {
    const matchesFolder = selectedFolder === "all" || asset.folder === selectedFolder;
    const matchesQuery =
      asset.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.altText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesQuery;
  });

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div
        className="admin-modal max-w-4xl w-full h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-white/8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#b8ff2c]/10 text-[#b8ff2c]">
              <Image className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Select Media Asset</h2>
              <p className="text-xs text-white/50">Choose an existing asset from the library or upload a new one</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-white/50 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-white/8 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          {/* Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets..."
              className="admin-input !py-1.5 !pl-9 !text-xs"
            />
          </div>

          {/* Folders Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
            <button
              type="button"
              onClick={() => setSelectedFolder("all")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFolder === "all"
                  ? "bg-[#b8ff2c] text-black font-bold"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              All Assets
            </button>
            {folders.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFolder(f.slug)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedFolder === f.slug
                    ? "bg-[#b8ff2c] text-black font-bold"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Upload Button */}
          <label className="admin-btn admin-btn-primary !py-1.5 !px-3 !text-xs cursor-pointer">
            <Upload className="w-3.5 h-3.5" />
            <span>{uploading ? `Uploading ${uploadProgress}%` : "Upload New"}</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>

        {/* Assets Grid */}
        <div className="flex-grow overflow-y-auto p-5">
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-[#b8ff2c] animate-spin" />
            </div>
          ) : filteredAssets.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-3">
                <Image className="w-6 h-6" />
              </div>
              <div className="text-white font-semibold text-sm">No media found</div>
              <div className="text-xs text-white/40 mt-1 max-w-xs">
                Upload your first image or clear search filters.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {filteredAssets.map((asset) => {
                const isSelected = currentValue === asset.fileUrl;
                return (
                  <div
                    key={asset.id}
                    onClick={() => {
                      onSelect(asset.fileUrl, asset);
                      onClose();
                    }}
                    className={`group relative rounded-xl border overflow-hidden aspect-video cursor-pointer bg-black/40 transition-all ${
                      isSelected
                        ? "border-[#b8ff2c] ring-2 ring-[#b8ff2c]/40"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={asset.fileUrl}
                      alt={asset.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                      <div className="text-[11px] font-semibold text-white truncate">{asset.filename}</div>
                      <div className="text-[10px] text-white/60 capitalize">{asset.folder}</div>
                    </div>
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#b8ff2c] text-black flex items-center justify-center shadow-lg">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
