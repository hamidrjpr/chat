"use client";

export type User = {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
  };
};

import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({
  initialUser,
  children,
}: {
  children: React.ReactNode;
  initialUser: User;
}) {
  const [user, setUser] = useState<User>(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
