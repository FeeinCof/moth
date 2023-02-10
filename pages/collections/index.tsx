import { ReactElement } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "./collections.module.css";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import { NavCollections } from "@/src/components";

const inter = Inter({ subsets: ["latin"] });

const Collections = () => {
  return (
    <>
      <Head>
        <title>Collections - MOTH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavCollections />
      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.banner_content}>
            <h1>The best</h1>
            <h1>cocktails</h1>
            <h1>in a can</h1>
          </div>
        </div>
      </main>
    </>
  );
};

Collections.getLayout = function getLayout(Collections: ReactElement) {
  return <DefaultLayout>{Collections}</DefaultLayout>;
};

export default Collections;
