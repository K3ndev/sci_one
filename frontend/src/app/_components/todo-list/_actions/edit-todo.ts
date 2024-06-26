'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export const editTodo = async (targetId: number, newTodo: string) => {
  const supabase = createClient()

  const { error } = await supabase
    .from('todos')
    .update({ todo: newTodo })
    .eq('id', targetId)
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};