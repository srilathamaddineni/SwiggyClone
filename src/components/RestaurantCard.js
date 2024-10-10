import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard= (props) => {
    const {resData}=props;
    const {name, cuisines,avgRating,cloudinaryImageId,sla}=resData?.info ;
    return (<div className="m-4 p-4 w-[270px] rounded-lg bg-gray-100">
        <img
        className='rounded'
        alt="res-logo"
        src={RES_LOGO_URL+resData.info.cloudinaryImageId}>
        </img>
        <h4 className="font-bold py-2 text-xl">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime}minutes</h4>
    </div>
    );
}

export const withVegNonVegLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const vegClassifier = resData?.info?.itemAttribute?.vegClassifier;

    return (
      <div>
        <label
          className={`font-bold ${
            vegClassifier === "VEG" ? "text-green-600" : "text-red-600"
          }`}
        >
          {vegClassifier === "VEG" ? "Vegetarian" : "Non-Vegetarian"}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;