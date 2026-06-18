-- ============================================
-- CareerPilot AI — Supabase Database Setup
-- Run this in: Supabase Dashboard > SQL Editor > New Query
-- ============================================

-- 1. Create the applications table
create table if not exists applications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  company text not null,
  role text not null,
  status text default 'Applied' check (status in ('Applied', 'Interviewing', 'Offer', 'Rejected')),
  applied_date date,
  link text,
  notes text,
  created_at timestamp with time zone default now()
);

-- 2. Enable Row Level Security (so users can only see their OWN applications)
alter table applications enable row level security;

-- 3. Policy: users can view only their own applications
create policy "Users can view their own applications"
  on applications for select
  using (auth.uid() = user_id);

-- 4. Policy: users can insert their own applications
create policy "Users can insert their own applications"
  on applications for insert
  with check (auth.uid() = user_id);

-- 5. Policy: users can update their own applications
create policy "Users can update their own applications"
  on applications for update
  using (auth.uid() = user_id);

-- 6. Policy: users can delete their own applications
create policy "Users can delete their own applications"
  on applications for delete
  using (auth.uid() = user_id);

-- 7. Index for faster sorting by date
create index if not exists applications_user_id_created_at_idx
  on applications (user_id, created_at desc);

-- ============================================
-- Done! Your table is ready with full security.
-- ============================================
