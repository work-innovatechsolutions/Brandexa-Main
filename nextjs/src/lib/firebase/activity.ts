import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./client";
import { ActivityLog } from "@/types/cms";

export async function logActivity(
  adminUid: string,
  adminName: string,
  action: string,
  targetType: ActivityLog["targetType"],
  targetId: string,
  description: string
) {
  try {
    const logsRef = collection(db, "activity_logs");
    await addDoc(logsRef, {
      adminUid,
      adminName,
      action,
      targetType,
      targetId,
      description,
      timestamp: new Date().toISOString(),
      serverTimestamp: serverTimestamp(),
    });
  } catch (error) {
    console.warn("Failed to log activity to Firestore:", error);
  }
}
