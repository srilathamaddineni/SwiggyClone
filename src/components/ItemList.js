import { ITEM_URL } from "../utils/constants";
const ItemList=({items})=>{
    console.log(items);
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div>
                        <span >{item.card.info.name}</span>
                        <span>-₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                        <p className="text-xs ">{item.card.info.description}</p>
                    </div>
                    <div className="w-20 h-25 flex-shrink-0 relative">
                        <img
                            src={ITEM_URL + item.card.info.imageId}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold px-1 py-0.5 rounded-md shadow-md">
                            ADD+
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;