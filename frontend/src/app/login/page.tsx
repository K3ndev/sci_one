'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { login, signup } from "./actions";

export default function LoginPage() {
  const [loginState, formLogin] = useFormState(login, {
    error: null,
  });
  const [signupState, formSignup] = useFormState(signup, {
    error: null,
  });

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <form action={formLogin} className="flex w-60 flex-col">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button type="submit" className="bg-red-800 text-black">
            Log in
          </button>
          <p className="my-2 text-red-900">{loginState.error}</p>
        </form>
      ) : (
        <form action={formSignup} className="flex w-60 flex-col">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button type="submit" className="bg-red-800 text-black">
            Sign up
          </button>
          <p className="my-2 text-red-900">{signupState.error}</p>
        </form>
      )}

      <div>
        <button onClick={() => setIsLogin(!isLogin)}>toggle sign in/up</button>
      </div>
    </>
  );
}