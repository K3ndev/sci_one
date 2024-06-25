'use client';

import { useState } from 'react';
import { checkAction } from '../_action/check-action';
import { editTodo } from '../_action/editTodo';
import { deleteTodo } from '../_action/removeTodo-action';
import { useProfileStore } from "../_stores/use-profile"

export default function TodoItem({ isCheck, id, todo, user_id }: { isCheck: boolean; id: number; todo: string , user_id: string}) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const { currentUser } = useProfileStore()

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
    await editTodo(targetId, newTodo);
    setEditMode(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={async () => {
          checkAction(id, isCheck);
        }}
      />
      {editMode ? (
        <input type="text" value={editedTodo} onChange={handleInputChange} />
      ) : (
        <p>{todo}, id: {user_id}</p>
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

      <button onClick={async () => deleteTodo(id)}>
        remove
      </button>
    </>
  );
}