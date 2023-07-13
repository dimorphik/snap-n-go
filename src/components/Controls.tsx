const Controls = (props: any) => {
  return (
    <article id="map-controls">
      <section id="search" onClick={props.onSearchClicked}>
        <span className="icon search"></span>
        <span className="search-text">
          {props.populated ? "California College of the Arts" : "Click here to start the demo!"}
        </span>
        <span className="icon profile"></span>
      </section>
      <section id="utilities">
        <span className="icon filter"></span>
        <span className="icon toggle"></span>
        <span className="icon camera"></span>
      </section>
      <section id="bottom-controls">
        <button
          className={`icon parking ${props.shouldDisplayParking ? "active" : ""}`}
          onClick={props.onParkingClicked}></button>
        <button
          className={`icon bike ${props.shouldDisplayBikes ? "active" : ""}`}
          onClick={props.onBikeClicked}></button>
        <button
          className={`icon scooter ${props.shouldDisplayScooters ? "active" : ""}`}
          onClick={props.onScooterClicked}></button>
      </section>
    </article>
  );
};

export default Controls;
