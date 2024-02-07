import Nav from "@/components/shared/Nav";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Footer from "@/components/shared/Footer";
import MaintenanceModal from "./api/wrong/MaintenanceModal";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const isUnderMaintenance = true;
  // const isHomePage = router.pathname === "/";

  return (
    <ThemeProvider attribute="class">
      {/* {isUnderMaintenance && isHomePage ? <MaintenanceModal /> : null} */}
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
