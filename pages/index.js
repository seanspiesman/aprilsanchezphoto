import Head from "next/head";
import HomePage from "../src/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>April Judith Photography</title>
      </Head>
      <main style={{ overflow: "hidden" }}>
        <HomePage />
      </main>
    </div>
  );
}
