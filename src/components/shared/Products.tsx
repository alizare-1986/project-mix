import React, { FC } from "react";
import { IPropsProducts } from "../../type/type.product";
import { isInCart, quantityCount, shorten } from "../../helper/function";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../features/cart/cartSlice";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

const Products: FC<IPropsProducts> = ({ product }) => {
  const state = useSelector((state: RootState) => state.shopcart);
  const dispatch = useDispatch();
 
console.log(state);

  return (
    <div>
      <img src={product.image} alt="product" style={{ width: 200 }} />
      <h2>{shorten(product.title)}</h2>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <div>
        {quantityCount(state, product.id) === 1 && (
          <button onClick={() => dispatch(removeItem(product))}>trash</button>
        )}
        {quantityCount(state, product.id) > 1 && (
          <button onClick={() => dispatch(decrease(product))}>-</button>
        )}
        {quantityCount(state, product.id) > 0 && (
          <span>{quantityCount(state, product.id)}</span>
        )}
        {isInCart(state, product.id) ? (
          <button onClick={() => dispatch(increase(product))}>+</button>
        ) : (
          <button onClick={() => dispatch(addItem(product))}>buy</button>
        )}
      </div>
      <Link to={`/products/${product.id}`}>Details</Link>
    </div>
  );
};

export default Products;
