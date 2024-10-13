import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleclearCart=()=>{
        dispatch(clearCart());
    };
    return( 
    <div className="text-center m-10 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-2 m-2 bg-black text-white" onClick={handleclearCart}>Clear Cart</button>
        <ItemList items={cartItems} />
        </div>
    );
};
export default Cart;