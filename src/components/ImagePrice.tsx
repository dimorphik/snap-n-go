const ImagePrice = (props: any) => {
  return (
    <figure>
      <img src={props.imageSource} alt={props.imageAlt} />
      <figcaption>{props.price}</figcaption>
    </figure>
  );
};

export default ImagePrice;
