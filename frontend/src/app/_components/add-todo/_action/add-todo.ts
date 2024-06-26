'use server';

import { SearchParamsType } from '@/app/_type/search-param';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const AddTodo = async (searchParams: SearchParamsType, formData: FormData) => {
  const newTodo = formData.get('newTodo');
  const supabase = createClient()

  const { error } = await supabase
    .from('todos')
    .insert([{ todo: newTodo }])
    .select();

  const params = new URLSearchParams();
  if (searchParams.page) params.append('page', searchParams.page);

  return redirect(`/?${params.toString()}`);
};