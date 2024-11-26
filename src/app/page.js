"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from "./Ejercicio1"
import Ejercicio2 from "./Ejercicio2"
import Ejercicio3 from "./Ejercicio3"
import Ejercicio11 from "./Ejercicio11"
import Ejercicio9 from "./Ejercicio9"
import Ejercicio13 from "./Ejercicio13"

export default function Home() {
  return (
    <div>
      <h3>Ejercicio 1</h3>
      <Ejercicio1 />
      <br />
      <br />
      <hr />
      <h3>Ejercicio 2</h3>
      <Ejercicio2 />
      <br />
      <br />
      <hr />
      <h3>Ejercicio 3</h3>
      <Ejercicio3 />
      <br />
      <br />
      <hr />
      <h3>Ejercicio 11</h3>
      <Ejercicio11 />
      <br />
      <br />
      <hr />
      <h3>Ejercicio 9</h3>
      <Ejercicio9 />
      <br />
      <br />
      <hr />
      <h3>Ejercicio 13</h3>
      <Ejercicio13 />
      <br />
      <br />
      <hr />
    </div>
  );
}
