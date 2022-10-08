import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BaseLayout from "./components/BaseLayout";
import Sidebar from "./components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Baton</title>
        <meta name="description" content="Manage your team's tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
