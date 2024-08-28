import World from "./World";
import styles from "./Hello.module.css";
export default function Hello() {
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontSize: "50px",
          backgroundColor: "yellow",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hi</div>
    </div>
  );
}
