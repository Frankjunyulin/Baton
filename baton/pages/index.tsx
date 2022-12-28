import {useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import Procedures from "./Procedures";

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Baton</title>
        <meta name="description" content="Manage your team's tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Procedures />
    </div>
  );
};

export default Home;
