import { Center, Box } from '@mantine/core';
import { createClient } from "../utils/supabase/server"
import { redirect } from 'next/navigation';
import LayoutShell from "./components/layout"
import SignOutButton from "./components/logout/logoutButton"

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <LayoutShell>
      <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
          <Box bg="var(--mantine-color-blue-light)">Main Dashboard</Box>
       </Center>
       <p>Hello {data.user.email}</p>
       <SignOutButton />
    </LayoutShell>
  );
}

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
