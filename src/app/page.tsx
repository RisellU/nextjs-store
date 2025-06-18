"use client" // con este anotacion hace que la pagina se convierta en un componente cliente
import styles from "./page.module.css";

export default function Home() {

  console.log('hola amigos')
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Hola mundo</h1>
      </main>
    </div>
  );
}
