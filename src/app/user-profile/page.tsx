"use client";
import { User, UserContext } from "@/components/UserProvider";
import { CSSProperties, useContext } from "react";

export default function UserProfile() {
  const { user } = useContext(UserContext) as { user: User };
  console.log(user);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      <p style={styles.text}>Name: {user.name}</p>
      <p style={styles.text}>Email: {user.email}</p>
      <p style={styles.text}>Address: {user.address?.city}</p>
      <p style={styles.text}>Username: {user.username || "No username"}</p>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
  },
  text: {
    fontSize: "2rem",
  },
};
