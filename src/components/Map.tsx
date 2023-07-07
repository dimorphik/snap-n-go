import MapControls from "./MapControls";

import { useNavigate } from "react-router-dom";

import "../css/Map.css";

const Map = (props: any) => {
  const navigate = useNavigate();

  const searchClickHandler = () => {
    if (!props.populated) {
      navigate("/map-populated");
    }
  };

  return (
    <section id="map" className={props.populated ? "populated" : ""}>
      <MapControls
        populated={props.populated}
        onSearchClicked={searchClickHandler}
        onParkingClicked={props.onParkingClicked}
        onBikeClicked={props.onBikeClicked}
        onScooterClicked={props.onScooterClicked}
      />
      {props.children}
    </section>
  );
};

export default Map;
