import Nav from "@/components/shared/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>kwaratech Academy</title>
        <meta name="description" content="Kwara tech academy" />
        <link rel="icon" href="/kwaraTech.jpg" />
      </Head>
      <Nav />
    </>
  );
}
