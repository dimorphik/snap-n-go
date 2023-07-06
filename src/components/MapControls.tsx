const MapControls = (props: any) => {
  return (
    <article id="map-controls">
      <section id="search" onClick={props.onSearchClicked}>
        <span className="icon search"></span>
        <span className="search-text">
          {props.populated ? "California College of the Arts" : "Search"}
        </span>
        <span className="icon profile"></span>
      </section>
      <section id="utilities">
        <span className="icon filter"></span>
        <span className="icon toggle"></span>
        <span className="icon camera"></span>
      </section>
      <section id="bottom-controls">
        <button className="icon parking"></button>
        <button className="icon bike"></button>
        <button className="icon scooter"></button>
      </section>
    </article>
  );
};

export default MapControls;
