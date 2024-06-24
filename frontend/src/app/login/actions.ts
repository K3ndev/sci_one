'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export async function login(_: unknown, formData: FormData): Promise<{ error: string | null }> {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error?.status) {
    return {
      error: error.status.toString()
    }
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(_: unknown, formData: FormData): Promise<{ error: string | null }> {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  function validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  if (!validateEmail(data.email)) {
    return {
      error: 'Invalid email',
    };
  }
  if (typeof data.password !== 'string' || data.password.length < 6 || data.password.length > 255) {
    return {
      error: 'Invalid password',
    };
  }

  const { error } = await supabase.auth.signUp(data);

  if (error?.status) {
    return {
      error: error.status.toString()
    }
  }

  revalidatePath('/', 'layout');
  redirect('/');
}