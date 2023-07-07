import { useEffect } from "react";

function useDocumentHeight() {
  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener("resize", documentHeight);
    };
  }, []);
}

export default useDocumentHeight;
