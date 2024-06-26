'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const AddTodo = async (formData: FormData) => {
  const newTodo = formData.get('newTodo');
  const supabase = createClient()

  const { error } = await supabase
    .from('todos')
    .insert([{ todo: newTodo }])
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};