'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export const AddTodo = async (formData: FormData) => {
  const supabase = createClient();
  const newTodo = formData.get('newTodo');

  const { error } = await supabase
    .from('todos')
    .insert([{ todo: newTodo }])
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};