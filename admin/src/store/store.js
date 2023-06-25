import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Features/ProductSlice";
import GallerySlice from "./Features/GallerySlice";

export const store = configureStore({
    reducer:{
        products: ProductSlice,
        gallery: GallerySlice
    }
})