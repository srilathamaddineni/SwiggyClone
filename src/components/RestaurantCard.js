import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard= (props) => {
    const {resData}=props;
    const {name, cuisines,avgRating,cloudinaryImageId,sla}=resData?.info ;
    return (<div className="res-card">
        <img
        className='res-logo'
        alt="res-logo"
        src={RES_LOGO_URL+resData.info.cloudinaryImageId}>
        </img>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime}minutes</h4>
    </div>
    );
}
export default RestaurantCard;