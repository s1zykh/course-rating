import { Button } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appearance="ghost" arrow="down">
          Кнопка
        </Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
