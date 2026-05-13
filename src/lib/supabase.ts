import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  if (!_client) _client = createClient(url, anonKey);
  return _client;
}

export interface AnalysisRecord {
  id?: string;
  inputs: Record<string, unknown>;
  outputs: Record<string, unknown>;
  created_at?: string;
}

export interface LeadRecord {
  id?: string;
  analysis_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company: string;
  role: string;
  project_name?: string;
  project_location?: string;
  project_value?: number;
  bid_date?: string;
  source?: string;
  lead_score?: number;
  created_at?: string;
}

export async function saveAnalysis(
  inputs: Record<string, unknown>,
  outputs: Record<string, unknown>
): Promise<string | null> {
  const client = getClient();
  if (!client) return null;
  const { data, error } = await client
    .from("analyses")
    .insert({ inputs, outputs })
    .select("id")
    .single();
  if (error) {
    console.error("Supabase saveAnalysis error:", error.message);
    return null;
  }
  return data?.id ?? null;
}

export async function getAnalysis(id: string): Promise<AnalysisRecord | null> {
  const client = getClient();
  if (!client) return null;
  const { data, error } = await client
    .from("analyses")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function saveLead(lead: LeadRecord): Promise<boolean> {
  const client = getClient();
  if (!client) return false;
  const { error } = await client.from("leads").insert(lead);
  if (error) {
    console.error("Supabase saveLead error:", error.message);
    return false;
  }
  return true;
}
