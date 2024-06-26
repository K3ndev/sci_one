
import { redirect } from 'next/navigation';
import LoginForm from '../_components/login-form';
import { createClient } from '@/utils/supabase/server';

export default async function LoginPage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser();
  
  if (!error || data?.user) {
    redirect('/');
  }

  return (
    <>
      <h1>hi</h1>
      <LoginForm />
    </>
  );
}