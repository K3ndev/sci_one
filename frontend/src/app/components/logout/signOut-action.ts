'use server';

import { redirect } from 'next/navigation';
import { createClient } from "../../../utils/supabase/server"

export async function SignOut() {
  const supabase = createClient();

  await supabase.auth.signOut();
  return redirect('/');
}