// In-memory store used when Supabase is not configured.
// Per-process only — resets on server restart. Dev only.
export const localStore = new Map<string, { input: Record<string, unknown>; output: Record<string, unknown> }>();
