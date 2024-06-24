'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export const checkAction = async (todoId: number, isCheck: boolean) => {
  const supabase = createClient();
  const { error } = await supabase
    .from('todos')
    .update({ isCheck: !isCheck })
    .eq('id', todoId)
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect('/');
};