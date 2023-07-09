const InfoIcon = (props: any) => {
  return (
    <article className={`info-icon`}>
      <span className={`bw-icon ${props.icon}`}></span>
      <p>{props.text}</p>
    </article>
  );
};

export default InfoIcon;
