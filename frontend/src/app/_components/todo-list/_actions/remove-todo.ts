'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SearchParamsType } from '@/app/_type/search-param';

export const deleteTodo = async (id: number, searchParams: SearchParamsType) => {
  const supabase = createClient()
  const params = new URLSearchParams();
  if (searchParams.page) params.append('page', searchParams.page);

  const { error } = await supabase.from('todos').delete().eq('id', id);

  if (error) {
    return redirect('/error');
  }

  return redirect(`/?${params.toString()}`);
};