-- DEV SYSTEM - Supabase schema

create table if not exists public.enrollments (
  email text primary key,
  full_name text not null default '',
  phone text not null default '',
  plan text not null default 'Plan Base',
  price_label text not null default '',
  latest_month_id int,
  paid boolean not null default false,
  source text not null default 'stripe',
  updated_at timestamptz not null default now()
);

create table if not exists public.monthly_payments (
  email text not null references public.enrollments(email) on delete cascade,
  month_id int not null check (month_id >= 1 and month_id <= 12),
  plan text not null default 'Plan Base',
  price_label text not null default '',
  status text not null default 'paid',
  source text not null default 'stripe',
  updated_at timestamptz not null default now(),
  primary key (email, month_id)
);

create table if not exists public.lesson_progress (
  email text not null references public.enrollments(email) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (email, lesson_id)
);

alter table public.enrollments enable row level security;
alter table public.monthly_payments enable row level security;
alter table public.lesson_progress enable row level security;

-- Users can read/update only their own rows by auth email.
create policy if not exists "enrollments_select_own"
on public.enrollments
for select
to authenticated
using (email = auth.jwt()->>'email');

create policy if not exists "lesson_progress_select_own"
on public.lesson_progress
for select
to authenticated
using (email = auth.jwt()->>'email');

create policy if not exists "lesson_progress_upsert_own"
on public.lesson_progress
for insert
to authenticated
with check (email = auth.jwt()->>'email');

create policy if not exists "lesson_progress_update_own"
on public.lesson_progress
for update
to authenticated
using (email = auth.jwt()->>'email')
with check (email = auth.jwt()->>'email');

create policy if not exists "monthly_payments_select_own"
on public.monthly_payments
for select
to authenticated
using (email = auth.jwt()->>'email');

-- Enrollment rows should be written by trusted backend/webhook in production.
-- For frontend-only setup, temporarily allow insert/update from anon if needed.
-- Remove these policies in hardened production.
create policy if not exists "enrollments_upsert_open_temp"
on public.enrollments
for insert
to anon, authenticated
with check (true);

create policy if not exists "enrollments_update_open_temp"
on public.enrollments
for update
to anon, authenticated
using (true)
with check (true);

create policy if not exists "monthly_payments_upsert_open_temp"
on public.monthly_payments
for insert
to anon, authenticated
with check (true);

create policy if not exists "monthly_payments_update_open_temp"
on public.monthly_payments
for update
to anon, authenticated
using (true)
with check (true);
