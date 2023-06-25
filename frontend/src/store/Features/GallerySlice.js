import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrlGallery } from "../../components/Common/common";


const initialState = {
    status:'idel',
    images:[]
}


export const uploadGalleryImage = createAsyncThunk('/upload', async (obj) => {
    try {
        const response = await axios.post(baseUrlGallery,obj,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        return response.data

    } catch (error) {
        return error.message
    }
})

export const getGalleryimages = createAsyncThunk('/', async () => {
    try {
        const response = await axios.get(baseUrlGallery);
        return response.data

    } catch (error) {
        return error.message
    }
})

export const deleteImage = createAsyncThunk('/delete', async (id) => {
    try {
        const response = await axios.delete(`${baseUrlGallery}/${id}`);
        return response.data

    } catch (error) {
        return error.message
    }
})

const GallerySlice = createSlice({
    name:'gallery',
    initialState:initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder
        .addCase(getGalleryimages.pending, (state,action) => {
            state.status = "pending"
        })
        .addCase(getGalleryimages.fulfilled, (state,action) => {
            state.status = "success"
            state.images = action.payload.data.images
        })
        

    }
})

export const getAllImages = (state) => state.gallery.images;
export const galleryStatus = (state) => state.gallery.status

export default GallerySlice.reducer;