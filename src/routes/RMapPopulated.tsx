import Map from "../components/Map";
import Bubble from "../components/Bubble";

import useDocumentHeight from "../hooks/useDocumentHeight";

import { useState } from "react";

const data = {
  parkingBubbles: [
    { left: 180, top: 405 },
    { left: 340, top: 361 },
    { left: 301, top: 253 },
  ],
  bikeBubbles: [
    { left: 267, top: 302 },
    { left: 125, top: 523 },
  ],
  scooterBubbles: [
    { left: 254, top: 445 },
    { left: 208, top: 254 },
  ],
};
const RMapPopulated = () => {
  const [shouldDisplayParking, setShouldDisplayParking] = useState(true);
  const [shouldDisplayBikes, setShouldDisplayBikes] = useState(true);
  const [shouldDisplayScooters, setShouldDisplayScooters] = useState(true);

  useDocumentHeight();

  const parkingClickHandler = () => {
    setShouldDisplayParking((oldValue) => !oldValue);
  };

  const bikeClickHandler = () => {
    setShouldDisplayBikes((oldValue) => !oldValue);
  };

  const scooterClickHandler = () => {
    setShouldDisplayScooters((oldValue) => !oldValue);
  };

  return (
    <Map
      populated="true"
      onParkingClicked={parkingClickHandler}
      onBikeClicked={bikeClickHandler}
      onScooterClicked={scooterClickHandler}>
      {shouldDisplayParking &&
        data.parkingBubbles.map((position, index) => (
          <Bubble key={`parking${index}`} type="parking" index={index} position={position} />
        ))}
      {shouldDisplayBikes &&
        data.bikeBubbles.map((position, index) => (
          <Bubble key={`bike${index}`} type="bike" index={index} position={position} />
        ))}
      {shouldDisplayScooters &&
        data.scooterBubbles.map((position, index) => (
          <Bubble key={`scooter${index}`} type="scooter" index={index} position={position} />
        ))}
    </Map>
  );
};

export default RMapPopulated;
