'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export const deleteTodo = async (id: number) => {
  const supabase = createClient()

  const { error } = await supabase.from('todos').delete().eq('id', id);

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};