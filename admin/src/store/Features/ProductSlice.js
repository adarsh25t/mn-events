import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseEmail, baseUrlProduct } from "../../components/Common/common";

const initialState = {
    products:[],
    status: "idle",
    selectedProduct:[]
};

export const fetchProducts = createAsyncThunk('/products', async () => {
    try {
        const response = await axios.get(baseUrlProduct);
        return response.data.data.products

    } catch (error) {
        return error.message
    }
})

export const createProduct = createAsyncThunk('/create', async (obj) => {
    try {

        const formData = new FormData();
        formData.append('title', obj.title);
        formData.append('description', obj.description);
        formData.append('price', obj.price);
        formData.append('category', obj.category);
        formData.append('productitems', obj.productitems)
        obj.images.forEach((image, index) =>formData.append(`image${index+1}`, image))

        const response = await axios.post(baseUrlProduct,formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        return response;

    } catch (error) {
        return error.message
    }
})

export const updateProduct = createAsyncThunk('/update', async (obj) => {
    try {

        const formData = new FormData();
        formData.append('title', obj.title);
        formData.append('description', obj.description);
        formData.append('price', obj.price);
        formData.append('category', obj.category);
        formData.append('productitems', obj.productitems)
        obj.images.forEach((image, index) =>formData.append(`image${index+1}`, image));
        
        const response = await axios.put(`${baseUrlProduct}/${obj.id}`,formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        return response;

    } catch (error) {
        return error.message
    }
})

export const deleteProduct = createAsyncThunk('/delete', async (id) => {
    try {
        const response = await axios.delete(`${baseUrlProduct}/${id}`);
        return response;

    } catch (error) {
        return error.message
    }
})

export const sendEmailforProductsandDetails = createAsyncThunk('/send', async (details) => {
    try {
        const response = await axios.post(baseEmail,details);
        return response;
    } catch (error) {
        return error.message
    }
})

const productSlice = createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        getSelectedProduct(state,action){
            state.selectedProduct = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = "success"
            state.products = action.payload
        })
        
    }
})

export const { getSelectedProduct } = productSlice.actions;
export const AllProducts = (state) => state.products.products;
export const productStatus = (state) => state.products.status;
export const selectedProducts = (state) => state.products.selectedProduct

export default productSlice.reducer;