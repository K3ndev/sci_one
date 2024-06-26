'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const AddTodo = async (_: unknown, formData: FormData): Promise<{ error: string | null }> => {
  const newTodo = formData.get('newTodo');
  const supabase = createClient()

  const { error } = await supabase
    .from('todos')
    .insert([{ todo: newTodo }])
    .select();

  if (error) {
    return {
      error: error.toString(),
    }
  }

  return redirect('/');
};