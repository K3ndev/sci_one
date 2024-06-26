"use client"

import { useRef, useEffect } from "react";
import { AddTodo } from "./_action/add-todo";
import { useFormState } from 'react-dom';

export default function AddTodoForm (){
  const newTodoInputRef = useRef<HTMLInputElement>(null);
  const [addTodoState, formAddTodo] = useFormState(AddTodo, {
    error: null,
  });

  useEffect(() => {
    console.log(addTodoState)
    if (addTodoState === undefined && newTodoInputRef.current) {
      newTodoInputRef.current.value = '';
    }
  }, [addTodoState])

  console.log(addTodoState)

    return (
        <form action={formAddTodo}>
          <input type="text" name="newTodo" placeholder="add new todo here" ref={newTodoInputRef}/>
          <button type="submit" className="bg-red-800 text-black">
            submit
          </button>
        </form>
    )
}