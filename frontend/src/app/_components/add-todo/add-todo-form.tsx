"use client"

import { AddTodo } from "./_action/add-todo";
import { SearchParamsType } from "@/app/_type/search-param";
import {useRef} from "react"

export default function AddTodoForm({ searchParams }: { searchParams: SearchParamsType }) {

  const addTodoRef = useRef<HTMLInputElement>(null)
  const addTodoWithParams = AddTodo.bind(null, searchParams);

  const addTodoHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!addTodoRef.current) return;

    await addTodoWithParams(new FormData(event.currentTarget as HTMLFormElement));
    addTodoRef.current.value = "";
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" name="newTodo" placeholder="add new todo here" ref={addTodoRef}/>
      <button type="submit" className="bg-red-800 text-black">
        submit
      </button>
    </form>
  );
}