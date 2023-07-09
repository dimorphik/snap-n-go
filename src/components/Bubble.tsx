import bubbleParking0 from "../media/icons/bubble-parking-0.png";

const Bubble = (props: any) => {
  const id = `bubble-${props.type}-${props.index}`;
  const imageSource = require(`../media/icons/${id}.png`);

  return <img className="bubble" style={props.position} src={imageSource} alt={`${id}`} onClick={props.onClick}></img>;
};

export default Bubble;
