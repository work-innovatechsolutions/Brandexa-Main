"use client";

import React from "react";
import { DynamicMetric } from "@/types/cms";
import { Plus, Trash2, GripVertical, TrendingUp } from "lucide-react";

interface DynamicMetricBuilderProps {
  metrics: DynamicMetric[];
  onChange: (metrics: DynamicMetric[]) => void;
}

export function DynamicMetricBuilder({ metrics, onChange }: DynamicMetricBuilderProps) {
  const handleAdd = () => {
    const newMetric: DynamicMetric = {
      id: `m_${Date.now()}`,
      label: "Metric Label",
      value: "+100%",
    };
    onChange([...metrics, newMetric]);
  };

  const handleUpdate = (id: string, field: "label" | "value", val: string) => {
    onChange(
      metrics.map((m) => (m.id === id ? { ...m, [field]: val } : m))
    );
  };

  const handleDelete = (id: string) => {
    onChange(metrics.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="admin-label !mb-0 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#b8ff2c]" />
          <span>Case Study Key Metrics & KPIs</span>
        </label>
        <button
          type="button"
          onClick={handleAdd}
          className="admin-btn admin-btn-secondary !py-1 !px-2.5 !text-xs text-[#b8ff2c]"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Metric</span>
        </button>
      </div>

      {metrics.length === 0 ? (
        <div className="p-4 rounded-xl border border-dashed border-white/10 text-center text-xs text-white/40">
          No metrics added yet. Click &ldquo;Add Metric&rdquo; to add stats like &ldquo;+184% Conversion Rate&rdquo;.
        </div>
      ) : (
        <div className="space-y-2">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-colors"
            >
              <div className="text-white/30 cursor-grab px-1">
                <GripVertical className="w-4 h-4" />
              </div>
              <div className="w-36 flex-shrink-0">
                <input
                  type="text"
                  value={metric.value}
                  onChange={(e) => handleUpdate(metric.id, "value", e.target.value)}
                  placeholder="e.g. +184%"
                  className="admin-input !py-1.5 !text-xs font-bold text-[#b8ff2c]"
                />
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  value={metric.label}
                  onChange={(e) => handleUpdate(metric.id, "label", e.target.value)}
                  placeholder="e.g. Conversion Rate Increase"
                  className="admin-input !py-1.5 !text-xs"
                />
              </div>
              <button
                type="button"
                onClick={() => handleDelete(metric.id)}
                className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5 transition-colors"
                title="Remove Metric"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
