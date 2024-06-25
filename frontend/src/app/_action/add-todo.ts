'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export const AddTodo = async (formData: FormData) => {
  const supabase = createClient();
  const newTodo = formData.get('newTodo');
  const { data } = await supabase.auth.getUser();

  const { error } = await supabase
    .from('todos')
    .insert([{ todo: newTodo, user_id: data.user!.id }])
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};