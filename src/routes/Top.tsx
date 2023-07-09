import Map from "../components/Map";
import useDocumentHeight from "../hooks/useDocumentHeight";

const Start = () => {
  useDocumentHeight();

  return <Map />;
};

export default Start;
