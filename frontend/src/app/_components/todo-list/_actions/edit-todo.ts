'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SearchParamsType } from '@/app/_type/search-param';

export const editTodo = async (targetId: number, newTodo: string, searchParams: SearchParamsType) => {
  const supabase = createClient()
  const params = new URLSearchParams();
  if (searchParams.page) params.append('page', searchParams.page);

  const { error } = await supabase
    .from('todos')
    .update({ todo: newTodo })
    .eq('id', targetId)
    .select();

  if (error) {
    return redirect('/error');
  }

  return redirect(`/?${params.toString()}`);
};