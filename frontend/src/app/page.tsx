import { Center, Box } from '@mantine/core';
import { createClient } from "../utils/supabase/server"
import { redirect } from 'next/navigation';
import Nav from "../app/_components/nav"

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
      <>
        <Nav email={data.user?.email} />
        <main>
          <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
            <Box bg="var(--mantine-color-blue-light)">Main Dashboard</Box>
          </Center>
        </main>
      </>
  );
}

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
