const HeroCard = (props) => {
  const {
    imageId,
    action: { link },
    action: { text },
    accessibility: { altText },
  } = props.props;

  //   console.log(imageId);
  //   console.log(link);
  //   console.log(altText);

  return (
    <div className="max-w-xs bg-white ">
      <a href={link}>
        <img
          className="rounded-t-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}
          alt={altText}
        />
      </a>
    </div>
  );
};

export default HeroCard;
