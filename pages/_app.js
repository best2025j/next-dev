import Nav from "@/components/layout/Nav";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Footer from "@/components/layout/Footer";
// import "react-datepicker/dist/react-datepicker.css";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  

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
