'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/server';

export const checkAction = async (todoId: number, isCheck: boolean) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('todos')
    .update({ isCheck: !isCheck })
    .eq('id', todoId)
    .select();
  
  if (error) {
    return redirect('/error');
  }

  // // permission
  // const { data: user, error: err } = await supabase
  //   .from('user')
  //   .select("*")
  //   .eq('id', data[0].user_id)

  // if (err) {
  //   return redirect('/error');
  // }


  // console.log(user[0].role)

  

  return redirect('/');
};