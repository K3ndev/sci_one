'use client';
import React from "react";
import { SignOut } from "./signout-action";

export default function SignOutButton() {
  return (
    <button onClick={async () => await SignOut()} className="bg-red-800 text-black">
      signout
    </button>
  );
}