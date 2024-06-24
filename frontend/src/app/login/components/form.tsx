'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { login, signup } from "../actions";
import React from 'react';


export default function LoginForm() {

  const [loginState, formLogin] = useFormState(login, {
    error: null,
  });
  const [signupState, formSignup] = useFormState(signup, {
    error: null,
  });

  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin)
    loginState.error = null
    signupState.error = null
  }

  return (
    <>
      {isLogin ? (
        <form action={formLogin} className="flex w-60 flex-col">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
          <button type="submit" className="bg-red-800 text-black">
            Log in
          </button>
          <p className="my-2 text-red-900">error: {loginState.error}</p>
        </form>
      ) : (
        <form action={formSignup} className="flex w-60 flex-col">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button type="submit" className="bg-red-800 text-black">
            Sign up
          </button>
          <p className="my-2 text-red-900">error: {signupState.error}</p>
        </form>
      )}

      <div>
        <button onClick={toggleLogin}>toggle sign in/up</button>
      </div>
    </>
  );
}