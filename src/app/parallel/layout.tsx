import styles from "@/styles/parallel/Parallel.module.css";

export default function ParallelLayout({
  children,
  header,
  sidebar,
  chat,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
  chat: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className={`${styles.header}`}>{header}</div>
      <div className="flex">
        <div className={`${styles.sidebar}`}>{sidebar}</div>
        <div className={`${styles.main}`}>{children}</div>
        <div className={`${styles.chat}`}>{chat}</div>
      </div>
    </div>
  );
}
