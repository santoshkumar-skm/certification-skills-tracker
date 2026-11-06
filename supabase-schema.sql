-- Run once in Supabase Dashboard > SQL Editor. This enables secure, user-isolated real-time sync.
create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 160), issuer text not null check (char_length(issuer) between 1 and 160),
  issue_date date, expiry_date date, credential_url text, created_at timestamptz not null default now()
);
create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 100), level text not null check (level in ('beginner','intermediate','advanced','expert')),
  progress integer not null default 0 check (progress between 0 and 100), created_at timestamptz not null default now()
);
alter table public.certifications enable row level security; alter table public.skills enable row level security;
create policy "Users manage only their certifications" on public.certifications for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users manage only their skills" on public.skills for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
alter publication supabase_realtime add table public.certifications, public.skills;
