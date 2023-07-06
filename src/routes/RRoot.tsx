import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Splash from "../components/Splash";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/map");
    }, 3000);
  });

  return <Splash />;
};

export default Root;
