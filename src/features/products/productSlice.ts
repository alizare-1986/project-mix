import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {  IShopState} from '../../type/type.product';


const initialState:IShopState = {
  products: [],
  loading:false,
  error: null
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchAPi.pending,state=>{
      state.loading=true
    })
    builder.addCase(fetchAPi.fulfilled,(state,action)=>{
      state.loading=false
      state.products=action.payload
   })
   builder.addCase(fetchAPi.rejected,(state,action)=>{
    state.loading=false
    state.products=[]
    state.error = action.error.message
   })
  }
  })
 const fetchAPi:any = createAsyncThunk(
  'products/fetchAPI',
  async()=>{
   
     
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data
   
  
  }
)


export default productSlice.reducer


export {fetchAPi}