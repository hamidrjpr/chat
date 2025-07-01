import styles from "@/styles/grouping/Grouping.module.css";

export default function Page() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <h3 className="text-2xl">
        This is DashBoard <span className={`${styles.span}`}>User</span>
      </h3>
    </div>
  );
}
