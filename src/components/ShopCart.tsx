import { useDispatch, useSelector } from "react-redux";
import Carts from "./shared/Carts";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";
import { clear,checkout } from "../features/cart/cartSlice";




const ShopCart= () => {
  const carts = useSelector((state:RootState) => state.shopcart.items);
  const state=useSelector((state:RootState)=>state.shopcart)
  const dispatch= useDispatch()



  return (
    <div>
      <div>
        {carts.map((cart) => (
          <Carts key={cart.id} cart={cart} />
        ))}
      </div>
      <div>
        {state.itemscounter>0 && 
         <div>
            <p> <span>totals items :</span>{state.itemscounter}</p>
            <p> <span>totals price :</span>{state.total}</p> 
             <div>
            <button onClick={()=>dispatch(checkout())} >checkout</button>
            <button onClick={()=>dispatch(clear())} >CLEAR</button>
             </div>
         </div>
            }           
              {
                    state.checkout &&
                    <div>
                        <p> checkout succsessfully</p>
                        <Link to={'/products'} >go shop</Link>
                    </div>

                }
                { !state.checkout && state.itemscounter === 0 &&
                <div>
                     <p>want to bye</p>
                        <Link to={'/products'} >back to shop</Link>
                </div>

                }
       
        </div>
    </div>
  );
};

export default ShopCart;
