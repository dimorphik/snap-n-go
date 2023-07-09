import Map from "../components/Map";
import Bubble from "../components/Bubble";
import Popover from "../components/Popover";

import useDocumentHeight from "../hooks/useDocumentHeight";

import { useState } from "react";

const data = {
  parkingBubbles: [
    { left: 80, top: 305 },
    { left: 240, top: 261 },
    { left: 201, top: 163 },
  ],
  parkingLocations: [
    {
      name: "Polk St. Garage",
      address: "345 Polk St., San Francisco, CA",
      distance: "0.5 mi away",
      availability: "25 parking spots available",
      imageSource: require("../media/images/parking-polk-st.png"),
      price: "$20.00",
      hours: "9:00am - 11:59pm daily",
      details:
        "This lot offers ample space, affordable rates, and is well-lit for added security, making it a reliable option for parking your vehicle while you're out and about.",
    },
    {
      name: "19th St. Garage",
      address: "1700 19th St., San Francisco, CA",
      distance: "1.3 mi away",
      availability: "10 parking spots available",
      imageSource: require("../media/images/parking-19th-st.png"),
      price: "$15.00",
      hours: "9:00am - 11:59pm daily",
      details:
        "This lot offers ample space, affordable rates, and is well-lit for added security, making it a reliable option for parking your vehicle while you're out and about.",
    },
    {
      name: "Bush St. Parking",
      address: "333 Bush St., San Francisco, CA",
      distance: "0.2 mi away",
      availability: "7 parking spots available",
      imageSource: require("../media/images/parking-bush-st.png"),
      price: "$7.00",
      hours: "9:00am - 11:59pm daily",
      details:
        "This lot offers ample space, affordable rates, and is well-lit for added security, making it a reliable option for parking your vehicle while you're out and about.",
    },
  ],
  bikeBubbles: [
    { left: 167, top: 202 },
    { left: 25, top: 423 },
  ],
  bikeLocations: [
    {
      name: "Union Bike Station",
      address: "123 Union St., San Francisco, CA",
      distance: "0.4 mi away",
      availability: "5 bikes available",
      imageSource: require("../media/images/bike-union-st.png"),
      price: "$3.50+",
      hours: "9:00am - 11:59pm daily",
      details:
        "They offer a variety of e-bikes for rent, and their staff is super friendly and helpful. It's a convenient spot to grab an e-bike and explore the city with ease!",
    },
    {
      name: "Blazing Saddles",
      address: "2715 Hyde St., San Francisco, CA",
      distance: "2.7 mi away",
      availability: "12 bikes available",
      imageSource: require("../media/images/bike-union-st.png"),
      price: "$4.25+",
      hours: "9:00am - 11:59pm daily",
      details:
        "They offer a variety of e-bikes for rent, and their staff is super friendly and helpful. It's a convenient spot to grab an e-bike and explore the city with ease!",
    },
  ],
  scooterBubbles: [
    { left: 154, top: 345 },
    { left: 108, top: 164 },
  ],
  scooterLocations: [
    {
      name: "Mr. Scoot's Rentals",
      address: "7th St., San Francisco, CA",
      distance: "0.5 mi away",
      availability: "8 scooters available",
      imageSource: require("../media/images/scooter-mr-scoot.png"),
      price: "$1.00+",
      hours: "9:00am - 11:59pm daily",
      details:
        "They offer a diverse range of vehicles, including electric & motor scooters, mopeds, electric skateboards and more.",
    },
    {
      name: "Mariposa Rentals",
      address: "127 10th St., San Francisco, CA",
      distance: "0.9 mi away",
      availability: "5 scooters available",
      imageSource: require("../media/images/scooter-mariposa-st.png"),
      price: "$1.00+",
      hours: "9:00am - 11:59pm daily",
      details:
        "They offer a diverse range of vehicles, including electric & motor scooters, mopeds, electric skateboards and more.",
    },
  ],
};
const Navigator = () => {
  const [shouldDisplayParking, setShouldDisplayParking] = useState(false);
  const [shouldDisplayBikes, setShouldDisplayBikes] = useState(false);
  const [shouldDisplayScooters, setShouldDisplayScooters] = useState(false);
  const [shouldDisplayPopover, setShouldDisplayPopover] = useState(false);
  const [popoverType, setPopoverType] = useState("parking");
  const [popoverData, setPopoverData] = useState({});

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

  const parkingBubbleClickHandler = (index: number) => {
    setShouldDisplayPopover(true);
    setPopoverType("parking");
    setPopoverData(data.parkingLocations[index]);
  };

  const bikeBubbleClickHandler = (index: number) => {
    setShouldDisplayPopover(true);
    setPopoverType("bike");
    setPopoverData(data.bikeLocations[index]);
  };

  const scooterBubbleClickHandler = (index: number) => {
    setShouldDisplayPopover(true);
    setPopoverType("scooter");
    setPopoverData(data.scooterLocations[index]);
  };

  const popoverCloseHandler = () => {
    setShouldDisplayPopover(false);
  };
  return (
    <>
      <Map
        hidden={shouldDisplayPopover}
        populated="true"
        shouldDisplayParking={shouldDisplayParking}
        shouldDisplayBikes={shouldDisplayBikes}
        shouldDisplayScooters={shouldDisplayScooters}
        onParkingClicked={parkingClickHandler}
        onBikeClicked={bikeClickHandler}
        onScooterClicked={scooterClickHandler}>
        {shouldDisplayParking &&
          data.parkingBubbles.map((position, index) => (
            <Bubble
              key={`parking${index}`}
              type="parking"
              index={index}
              position={position}
              onClick={() => parkingBubbleClickHandler(index)}
            />
          ))}
        {shouldDisplayBikes &&
          data.bikeBubbles.map((position, index) => (
            <Bubble
              key={`bike${index}`}
              type="bike"
              index={index}
              position={position}
              onClick={() => bikeBubbleClickHandler(index)}
            />
          ))}
        {shouldDisplayScooters &&
          data.scooterBubbles.map((position, index) => (
            <Bubble
              key={`scooter${index}`}
              type="scooter"
              index={index}
              position={position}
              onClick={() => scooterBubbleClickHandler(index)}
            />
          ))}
      </Map>
      <Popover
        isActive={shouldDisplayPopover}
        type={popoverType}
        data={popoverData}
        onPopoverClose={popoverCloseHandler}
      />
    </>
  );
};

export default Navigator;
