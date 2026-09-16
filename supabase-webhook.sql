-- DEV SYSTEM - Bitácora de eventos de pago (webhook de Mercado Pago)
-- Idempotencia + auditoría. El dueño corre esto en Supabase SQL Editor.

create table if not exists public.payment_events (
  payment_id    text primary key,
  email         text,
  month_id      int,
  status        text not null,
  amount        numeric,
  expected      numeric,
  raw           jsonb,
  processed_at  timestamptz not null default now()
);

alter table public.payment_events enable row level security;
drop policy if exists "payment_events_all" on public.payment_events;
create policy "payment_events_all" on public.payment_events
  for all to anon, authenticated using (true) with check (true);

create index if not exists payment_events_email_idx on public.payment_events (email);