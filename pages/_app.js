import Nav from "@/components/shared/Nav";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Footer from "@/components/shared/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
