import {Fragment, useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BaseLayout from "./components/BaseLayout";
import MainContainer from "./components/MainContainer";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Baton</title>
        <meta name="description" content="Manage your team's tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </div>
  );
};

export default Home;
