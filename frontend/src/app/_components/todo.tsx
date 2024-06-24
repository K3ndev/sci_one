'use client';

import { useState } from 'react';
import { checkAction } from '../_action/check-action';
import { editTodo } from '../_action/editTodo';
import { deleteTodo } from '../_action/removeTodo-action';

export default function TodoItem({ isCheck, id, todo }: { isCheck: boolean; id: number; todo: string }) {
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

      <button onClick={async () => deleteTodo(id)}>
        remove
      </button>
    </>
  );
}