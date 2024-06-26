"use client"

import { AddTodo } from "./_action/add-todo";
import { SearchParamsType } from "@/app/_type/search-param";

export default function AddTodoForm({ searchParams }: { searchParams: SearchParamsType }) {

  const addTodoWithParams = AddTodo.bind(null, searchParams);

  return (
    <form action={addTodoWithParams}>
      <input type="text" name="newTodo" placeholder="add new todo here" />
      <button type="submit" className="bg-red-800 text-black">
        submit
      </button>
    </form>
  );
}