'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function SignOut() {
  const supabase = createClient();

  await supabase.auth.signOut();
  return redirect('/');
}