import styles from "./styles/NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <h1>صفحه پیدا نشد!</h1>
      <p>ممکن است این صفحه حذف شده باشد یا به طور موقت در دسترس نباشد</p>
    </section>
  );
}
