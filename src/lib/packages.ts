"use client";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { trips as defaultTrips, type TripDetail } from "@/data/trips";

// Packages are managed from the CRM ("Website Packages") and stored in the
// shared Supabase `site_content` table under key = "packages". When that row
// is missing/empty/misconfigured we fall back to the bundled defaults so the
// site never renders an empty catalogue.

function isValidList(v: unknown): v is TripDetail[] {
  return Array.isArray(v) && v.length > 0 && v.every((p) => p && typeof p === "object" && "id" in p && "slug" in p);
}

export async function fetchPackages(): Promise<TripDetail[]> {
  if (!supabase) return defaultTrips;
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("value")
      .eq("key", "packages")
      .maybeSingle();
    if (error || !data) return defaultTrips;
    return isValidList(data.value) ? (data.value as TripDetail[]) : defaultTrips;
  } catch {
    return defaultTrips;
  }
}

// Client hook: renders the bundled defaults immediately (good for SSR/SEO and
// instant paint), then swaps in the live CRM-managed list once fetched.
export function usePackages(): { packages: TripDetail[]; loading: boolean } {
  const [packages, setPackages] = useState<TripDetail[]>(defaultTrips);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPackages().then((list) => {
      if (!cancelled) {
        setPackages(list);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  return { packages, loading };
}
