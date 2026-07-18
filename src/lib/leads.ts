import { supabase } from "./supabase";

// Matches the `leads` table used by the Shera Travels CRM
// (see Sheratravels/supabase-schema.sql + src/context/CRMContext.jsx)
export type LeadPayload = {
  name: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  destination?: string;
  travel_date?: string; // YYYY-MM-DD
  adults?: number;
  notes?: string;
  source?: string;
};

export async function submitLead(payload: LeadPayload) {
  if (!supabase) {
    throw new Error("Booking system is not configured. Please call or WhatsApp us instead.");
  }

  const { error } = await supabase.from("leads").insert([
    {
      name: payload.name,
      phone: payload.phone || null,
      whatsapp: payload.whatsapp || payload.phone || null,
      email: payload.email || null,
      destination: payload.destination || null,
      travel_date: payload.travel_date || null,
      adults: payload.adults || 1,
      notes: payload.notes || null,
      source: payload.source || "Website",
      stage: "new_inquiry",
    },
  ]);

  // Supabase returns a PostgrestError (a plain object, not an Error instance),
  // so re-wrap it in a real Error to preserve the message for the UI/logs.
  if (error) {
    console.error("submitLead failed:", error);
    throw new Error(error.message || "Could not submit right now. Please try again.");
  }
}
