const ActCard = ({ act }) => {
  const {image, title} = act;
  return (
    <div className="card  lg:h-96 lg:w-80 sm:w-full bg-base-100 border-4 border-gray-500">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-60 w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default ActCard;
