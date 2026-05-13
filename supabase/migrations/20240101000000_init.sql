-- PenePlan: analyses and leads tables

create extension if not exists "pgcrypto";

create table if not exists analyses (
  id         uuid primary key default gen_random_uuid(),
  inputs     jsonb not null,
  outputs    jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists leads (
  id               uuid primary key default gen_random_uuid(),
  analysis_id      uuid references analyses(id) on delete set null,
  first_name       text not null,
  last_name        text,
  email            text not null,
  phone            text,
  company          text not null,
  role             text,
  project_name     text,
  project_location text,
  project_value    numeric,
  bid_date         date,
  source           text default 'peneplan_results',
  lead_score       integer,
  created_at       timestamptz not null default now()
);

-- Allow anonymous inserts (used by anon key from browser)
alter table analyses enable row level security;
alter table leads enable row level security;

create policy "allow_insert_analyses" on analyses for insert with check (true);
create policy "allow_select_analyses" on analyses for select using (true);

create policy "allow_insert_leads" on leads for insert with check (true);
