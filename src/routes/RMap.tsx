import Map from "../components/Map";
import useDocumentHeight from "../hooks/useDocumentHeight";

const RMap = () => {
  useDocumentHeight();

  return <Map />;
};

export default RMap;
