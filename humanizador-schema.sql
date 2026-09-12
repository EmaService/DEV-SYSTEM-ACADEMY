-- DEV SYSTEM - Humanizador: muestras de estilo objetivo
-- Tabla para calibrar el estilo del humanizador con el uso del owner.

create table if not exists public.humanizador_muestras (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  texto text not null,
  nivel text not null default 'licenciatura',
  created_at timestamptz not null default now()
);

alter table public.humanizador_muestras enable row level security;

create policy if not exists "humanizador_muestras_own"
on public.humanizador_muestras
for all
to authenticated
using (email = auth.jwt()->>'email')
with check (email = auth.jwt()->>'email');