import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPi } from "../features/products/productSlice";
import Products from "./shared/Products";
import { RootState } from "../app/store";
import { Product } from "../type/type.product";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPi());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 
 

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((product:Product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
