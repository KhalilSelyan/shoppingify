import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/sidebar";
import MainPage from "./MainPage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoppingify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="grid grid-cols-7">
        <SideBar />
        <MainPage />
        {/* <RightSideBar/> */}
      </div>
    </div>
  );
};

export default Home;
