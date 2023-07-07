const MapControls = (props: any) => {
  return (
    <article id="map-controls">
      <section id="search" onClick={props.onSearchClicked}>
        <span className="icon search"></span>
        <span className="search-text">{props.populated ? "California College of the Arts" : "Search"}</span>
        <span className="icon profile"></span>
      </section>
      <section id="utilities">
        <span className="icon filter"></span>
        <span className="icon toggle"></span>
        <span className="icon camera"></span>
      </section>
      <section id="bottom-controls">
        <button className="icon parking" onClick={props.onParkingClicked}></button>
        <button className="icon bike" onClick={props.onBikeClicked}></button>
        <button className="icon scooter" onClick={props.onScooterClicked}></button>
      </section>
    </article>
  );
};

export default MapControls;
