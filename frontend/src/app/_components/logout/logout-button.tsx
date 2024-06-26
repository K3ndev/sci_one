'use client';
import React from "react";
import { Logout } from "./_actions/signout";

export default function SignOutButton() {
  return (
    <button onClick={async () => await Logout()} className="bg-red-800 text-black">
      signout
    </button>
  );
}