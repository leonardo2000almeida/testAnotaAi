import Head from 'next/head'
import Cardapio from '../components/Cardapio'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <title>
          Cardárpio
        </title>
      </Head>
      <section>
        <header>
          <input type="text" id="myInput" placeholder="busque um lanche.." onChange={(e) => setFilter(e.target.value)} />
        </header>
        <Cardapio filter={filter} />
      </section>
    </div>
  )
}
