import InfoIcon from "./InfoIcon";

const InfoIconGroup = (props: any) => {
  return (
    <section className="info-icon-group">
      <button>Reserve</button>
      {props.type === "parking" ? (
        <>
          <InfoIcon icon="clock" text={props.data.hours} />
          <InfoIcon icon="covered-parking" text="Covered Parking" />
          <InfoIcon icon="ev-charging" text="EV Charging" />
          <InfoIcon icon="lock" text="Security On-Site" />
        </>
      ) : (
        ""
      )}
      {props.type === "bike" ? (
        <>
          <InfoIcon icon="clock" text="open 24/7" />
          <InfoIcon icon="charging-bolt" text="3 E-bikes available" />
          <InfoIcon icon="bike" text="2 standard bikes available" />
          <InfoIcon icon="dollar-sign-check" text="$5.00 Reservation fee" />
          <InfoIcon icon="dollar-sign" text="$3.50 Rental fee +0.30/mile" />
        </>
      ) : (
        ""
      )}
      {props.type === "scooter" ? (
        <>
          <InfoIcon icon="clock" text="open 24/7" />
          <InfoIcon icon="scooter" text="2 Standard scooters" />
          <InfoIcon icon="e-scooter" text="3 E-scooters" />
          <InfoIcon icon="moped" text="3 Mopeds" />
          <InfoIcon icon="dollar-sign-check" text="$5.00 Reservation fee" />
          <InfoIcon icon="dollar-sign" text="$1.00 Rental fee +0.30/mile" />
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default InfoIconGroup;
