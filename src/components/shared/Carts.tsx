import { FC } from "react";
import { shorten } from "../../helper/function";
import { useDispatch} from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";



const Carts:FC<any> = ({ cart }) => {
 const dispatch = useDispatch()
  return (
    <div>
      <div>
        <img src={cart.image} alt="product" style={{ width: 200 }} />
        <h3>{shorten(cart.title)}</h3>
        <p>{cart.price} $</p>
        <p>{cart.quantity}</p>
      </div>
      {
        cart.quantity>1 ?
        <button onClick={()=>dispatch(decrease(cart))}>-</button>:
        <button onClick={()=>dispatch(removeItem(cart))}>trash</button>
      }
      <button onClick={()=>dispatch(increase(cart))}>+</button>
      <div>
        <Link to={`/products/${cart.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Carts;
