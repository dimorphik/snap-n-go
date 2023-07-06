import Map from "../components/Map";

import { useEffect } from "react";
const RMap = () => {
  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      console.log(`document height: ${window.innerHeight}`);
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener("resize", documentHeight);
    };
  }, []);
  return <Map />;
};

export default RMap;
