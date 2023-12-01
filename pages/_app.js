import Nav from "@/components/shared/Nav";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Footer from "@/components/shared/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const { asPath } = router;

  // const noNav = ["/Signin", "/Signup"];
  // const noFooter = ["/", "/Signin", "/Signup"];
  //  <ThemeProvider attribute="class">
  //         no navabar on both signup and signin page...
  //         {noNav.includes(asPath) ? null : <Nav />}
  //                 <Component {...pageProps} />

  //         no footer on both signin and signup page...
  //         {noFooter.includes(asPath) ? null : <Footer />}
  //       </ThemeProvider>

  return (
    <ThemeProvider attribute="class">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
// * <motion.div key={router.pathname}>

//     </motion.div>
//  <motion.div
//         className="slide-in absolute top-0 left-0 w-full h-full bg-slate-900 transform-gpu"
//         initial={{ scaleY: 0 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 1 }}
//         transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
//       ></motion.div>

//       <motion.div
//         className="slide-out absolute top-0 left-0 w-full h-full bg-slate-900 transform-gpu"
//         initial={{ scaleY: 1 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 0 }}
//         transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
//       ></motion.div>
