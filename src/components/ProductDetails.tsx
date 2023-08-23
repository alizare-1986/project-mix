import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPi } from '../features/products/productSlice';
import { RootState } from '../app/store';

const ProductDetails = () => {
    const params=useParams()
    const id:any=params.id
    const productss=useSelector((state:RootState)=>state.products.products)
    const product=productss[id-1]
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(fetchAPi(id))
    },[dispatch,id])
    if(!product){
        return <div>loading...</div>
      }
      console.log(product);
      
    return (
        <div>
        <img src={product.image} alt='product' style={{width:300}}/>
      <h3>{product.title}</h3>
      <p>description: {product.description}</p>
      <p>category: {product.category}</p>
      <p>{product.price} $</p>
      <Link to={'/products'} >back to shop</Link>
  </div>
    );
};

export default ProductDetails;