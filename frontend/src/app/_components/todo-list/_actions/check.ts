'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { SearchParamsType } from '@/app/_type/search-param';

export const checkAction = async (todoId: number, isCheck: boolean, searchParams: SearchParamsType) => {

  const supabase = createClient()
  const params = new URLSearchParams();
  if (searchParams.page) params.append('page', searchParams.page);

  const { data, error } = await supabase
    .from('todos')
    .update({ isCheck: !isCheck })
    .eq('id', todoId)
    .select();
  
  if (error) {
    return redirect('/error');
  }

  return redirect(`/?${params.toString()}`);
};