import { Box } from '@mantine/core';
import { createClient } from "../utils/supabase/server"
import { redirect } from 'next/navigation';
import Nav from "../app/_components/nav"
import TodoItem from "./_components/todo"
import { AddTodo } from './_action/add-todo';

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const { data: todos } = await supabase.from('todos').select('*');
  return (
      <>
        <Nav email={data.user?.email} />
        <main>
            <Box bg="var(--mantine-color-blue-light)">
            <ul>
              {todos?.map((item, index: number) => {
                return (
                  <li key={index} className="mb-1 flex gap-2">
                    <TodoItem id={item.id} isCheck={item.isCheck} todo={item.todo} />
                  </li>
                );
              })}
            </ul>
            <form action={AddTodo}>
              <input type="text" name="newTodo" placeholder="add new todo here" />
              <button type="submit" className="bg-red-800 text-black">
                submit
              </button>
            </form>
          </Box>
        </main>
      </>
  );
}

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
