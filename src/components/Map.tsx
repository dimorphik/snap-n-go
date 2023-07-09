import Controls from "./Controls";

import { useNavigate } from "react-router-dom";

const Map = (props: any) => {
  const navigate = useNavigate();

  const searchClickHandler = () => {
    if (!props.populated) {
      navigate("/navigator");
    }
  };

  return (
    <section id="map" className={`${props.populated ? "populated" : ""} ${props.hidden ? "hidden" : ""}`}>
      <Controls
        populated={props.populated}
        onSearchClicked={searchClickHandler}
        shouldDisplayParking={props.shouldDisplayParking}
        shouldDisplayBikes={props.shouldDisplayBikes}
        shouldDisplayScooters={props.shouldDisplayScooters}
        onParkingClicked={props.onParkingClicked}
        onBikeClicked={props.onBikeClicked}
        onScooterClicked={props.onScooterClicked}
      />
      {props.children}
    </section>
  );
};

export default Map;
