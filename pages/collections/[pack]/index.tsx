import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DefaultLayout from "@/src/layouts/DefaultLayout/DefaultLayout";
import { NavCollections } from "@/src/components";

function Pack() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Collections - MOTH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavCollections />
      <main>{router.asPath}</main>
    </>
  );
}

Pack.getLayout = function getLayout(Pack: ReactElement) {
  return <DefaultLayout>{Pack}</DefaultLayout>;
};

export default Pack;
