/* eslint-disable no-unused-vars */
"use client";

import Authentication from "@/services/firebase/auth/auth";
import User from "@/types/User";
import { createContext, useState, useEffect } from "react";

interface AuthenticationProps {
  loading: boolean;
  user: User | null;
  loginGoogle?: () => Promise<User | null>;
  logout?: () => Promise<void>;
}

const AuthenticationContext = createContext<AuthenticationProps>({
  loading: false,
  user: null,
  loginGoogle: async () => null,
  logout: async () => {},
});

export async function AuthenticationProvider(props: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // const authentication = new Authentication();

  // useEffect(() => {
  //   const cancel = authentication.observeUser((user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });
  //   return cancel();
  // }, []);

  // async function loginGoogle() {
  //   const loggedUser = await authentication.loginGoogle();
  //   setUser(loggedUser);
  //   return loggedUser;
  // }

  // async function logout() {
  //   await authentication.logout();
  //   setUser(null);
  // }

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        user,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
