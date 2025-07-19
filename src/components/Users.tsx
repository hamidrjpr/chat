"use client";

import { use } from "react";

export default function Users({
  users,
}: {
  users: Promise<Array<{ id: number }>>;
}) {
  const new_users = use(users);
  return (
    <div className="flex gap-2">
      {new_users.map((user) => (
        <div key={user.id} className="border border-red-500 p-1">
          {user.id}
        </div>
      ))}
    </div>
  );
}
