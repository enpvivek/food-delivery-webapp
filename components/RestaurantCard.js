const RestaurantCard = (props) => {
  const {
    info: {
      name,
      areaName,
      cloudinaryImageId,
      costForTwo,
      sla: { deliveryTime },
      avgRating,
    },
    cta: { link },
  } = props.props;
  // console.log(name);
  // console.log(areaName);
  // console.log(cloudinaryImageId);
  // console.log(deliveryTime);
  // console.log(avgRating);
  // console.log(link);
  return (
    <div className="max-w-sm my-5 bg-gray-100 border border-gray-200 rounded-lg shadow ">
      <a href={link}>
        <img
          className="rounded-lg object-cover transition-transform transform hover:scale-105"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${cloudinaryImageId}`}
          style={{ width: "300px", height: "180px", objectFit: "cover" }}
          alt="name"
        />
      </a>
      <div className="pt-4">
        <a href={link}>
          <h5 className="mb-2 px-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 px-2 font-normal text-gray-700">{areaName}</p>
        <a
          href="#"
          className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg transition-transform transform hover:scale-105 "
        >
          {avgRating} ✪ {" ‧ "}
          {deliveryTime} mins {" ‧ "} {costForTwo}
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
