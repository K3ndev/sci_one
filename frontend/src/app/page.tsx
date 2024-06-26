import { redirect } from "next/navigation";
import Nav from "./_components/nav/nav";
import TodoItem from "./_components/todo-list/todo";
import PaginationButton from "./_components/pagination-button";
import { getPagination } from "./_utils/get-pagination";
import { createClient } from "@/utils/supabase/server";
import AddTodoForm from "./_components/add-todo/add-todo-form";

type SearchParamsType = {
  [key: string]: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // pagination
  const { from, to } = getPagination(+searchParams.page || 0, 1);
  const { data: todos } = await supabase
    .from("todos")
    .select("*")
    .range(from, to)
    .order("id", { ascending: true });

  return (
    <>
      <Nav email={data.user?.email} id={data.user?.id} />
      <main>
        <ul>
          {todos?.map((item, index: number) => {
            return (
              <li key={+index + +item.id} className="mb-1 flex gap-2">
                <TodoItem
                  id={item.id}
                  isCheck={item.isCheck}
                  todo={item.todo}
                  user_id={item.user_id}
                />
              </li>
            );
          })}
        </ul>
        <AddTodoForm />
        <PaginationButton searchParams={searchParams}/>
      </main>
    </>
  );
}

// https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
