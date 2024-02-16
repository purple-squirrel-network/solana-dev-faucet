import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Purple Squirrel Faucet</title>
        <meta
          name="description"
          content="Purple Squirrel Faucet"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
