import bubbleParking0 from "../media/icons/bubble-parking-0.png";

const Bubble = (props: any) => {
  const id = `bubble-${props.type}-${props.index}`;

  return <img className="bubble" style={props.position} src={require(`../media/icons/${id}.png`)} alt={`${id}`}></img>;
};

export default Bubble;
