import InfoIcon from "./InfoIcon";
import InfoIconGroup from "./InfoIconGroup";
import ImagePrice from "./ImagePrice";

const Popover = (props: any) => {
  return (
    <section id="popover" className={`${props.type} ${props.isActive ? "active" : ""}`}>
      <ul>
        <li>
          <span className={`header-icon ${props.type}`}></span>
        </li>
        <li className="content">
          {props.data.imageSource ? (
            <>
              <h1>{props.data.name}</h1>
              <p>{props.data.address}</p>

              <InfoIcon icon="location" text={props.data.distance} />
              <InfoIcon icon={props.type} text={props.data.availability} />
              <ImagePrice imageSource={props.data.imageSource} imageAlt={props.data.name} price={props.data.price} />
              <InfoIconGroup type={props.type} data={props.data} />

              <h2>Details</h2>
              <p className="details">{props.data.details}</p>
            </>
          ) : (
            ""
          )}
        </li>
        <li>
          <span className={`close-button`} onClick={props.onPopoverClose}></span>
        </li>
      </ul>
    </section>
  );
};

export default Popover;
