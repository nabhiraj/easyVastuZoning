import {configureStore} from '@reduxjs/toolkit';
import imageReducer from './imageState';
import cropedImageReducer from './cropedImageState'
let store = configureStore({
    reducer:{
        imageState:imageReducer,
        cropImageState:cropedImageReducer
    }
});
export {store}