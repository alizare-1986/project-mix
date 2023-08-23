import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';

const Navbar = () => {
    const state=useSelector((state:RootState)=>state.shopcart)
    return (
        
             <div style={{display:'flex',justifyContent:'space-between'}} >
        <Link  to={'/products'} >products</Link>
        
       <div style={{ display:'flex', justifyContent:'flex-end'}} >
            <Link to={'/cart'} >shop</Link>
            <span>{state.itemscounter}</span>
        </div>  
        </div>
    );
};

export default Navbar;