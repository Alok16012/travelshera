import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Without these the whole site silently falls back to hardcoded demo content,
// which looks like a working site. Make the misconfiguration loud instead.
if (!isSupabaseConfigured) {
  console.error(
    "[supabase] Missing env vars — site will render fallback demo content. " +
      `NEXT_PUBLIC_SUPABASE_URL=${supabaseUrl ? "set" : "MISSING"} ` +
      `NEXT_PUBLIC_SUPABASE_ANON_KEY=${supabaseAnonKey ? "set" : "MISSING"}`
  );
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
