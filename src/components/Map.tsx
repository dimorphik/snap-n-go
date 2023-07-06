import MapControls from "./MapControls";

import { useState } from "react";

import "../css/Map.css";

const Map = () => {
  const [mapPopulated, setMapPopulated] = useState(false);
  const [shouldDisplayAmenities, setShouldDisplayAmenities] = useState(false);

  const searchClickHandler = () => {
    if (!mapPopulated) {
      setMapPopulated(true);
    }
  };

  return (
    <section id="map" className={mapPopulated ? "populated" : ""}>
      <MapControls populated={mapPopulated} onSearchClicked={searchClickHandler} />
    </section>
  );
};

export default Map;
