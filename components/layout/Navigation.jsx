import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Navigation = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(location.pathname !== "/");
  }, [location]);

  return <Header className={`p-4 ${isVisible ? "block" : "hidden"}`} />;
};

export default Navigation;
