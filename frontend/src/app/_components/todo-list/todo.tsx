'use client';

import { useState } from 'react';
import { editTodo } from './_actions/edit-todo';
import { checkAction } from './_actions/check';
import { deleteTodo } from './_actions/remove-todo';
import { SearchParamsType } from '@/app/_type/search-param';

export default function TodoItem({ isCheck, id, todo, user_id, searchParams }: { isCheck: boolean; id: number; todo: string , user_id: string, searchParams: SearchParamsType}) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(e.target.value);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTodo(todo);
  };

  const handleSaveEdit = async (targetId: number, newTodo: string) => {
    await editTodo(targetId, newTodo, searchParams);
    setEditMode(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={async () => {
          checkAction(id, isCheck, searchParams);
        }}
      />
      {editMode ? (
        <input type="text" value={editedTodo} onChange={handleInputChange} />
      ) : (
        // 
        <p>{todo}</p>
      )}
      {editMode ? (
        <>
          <button
            onClick={() => {
              handleSaveEdit(id, editedTodo);
            }}
          >
            Save
          </button>
          <button onClick={handleCancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={handleEdit}>
          Edit
        </button>
      )}

      <button onClick={async () => deleteTodo(id, searchParams)}>
        remove
      </button>
    </>
  );
}