import Head from "next/head";
import HomePage from "../src/HomePage/HomePage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>April Judith Photography</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </div>
  );
}
