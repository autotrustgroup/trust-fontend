"use client";

import { MapPin } from "lucide-react";

export function LocationFilter() {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span>Seattle, WA</span>
      </div>
      <select className="border rounded px-2 py-1">
        <option value="25">25 miles</option>
        <option value="50">50 miles</option>
        <option value="75">75 miles</option>
        <option value="100">100 miles</option>
      </select>
    </div>
  );
}
