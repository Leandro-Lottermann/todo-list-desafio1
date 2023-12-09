import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="" />
      <div>
        <span className={styles.spanTo}>to</span>
        <span className={styles.spanDo}>do</span>
      </div>
    </header>
  );
}
