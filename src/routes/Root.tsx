import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useDocumentHeight from "../hooks/useDocumentHeight";
import Splash from "../components/Splash";

const Root = () => {
  useDocumentHeight();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/top");
    }, 3000);
  });

  return <Splash />;
};

export default Root;
