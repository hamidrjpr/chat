import styles from "@/styles/grouping/Grouping.module.css";

export default function SalesPage() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <h3 className="text-3xl">
        This is Marketing <span className={`${styles.span}`}>Sales</span>
      </h3>
    </div>
  );
}
