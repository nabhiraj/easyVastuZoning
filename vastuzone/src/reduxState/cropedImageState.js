import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {},
}

const cropedImageSlice = createSlice({
    name:'cropedImageState',
    initialState,
    reducers:{
        putImage: (state,action)=>{state.value = action.payload},
        removeImage: (state)=>{state.value=''}
    }
}); 

export const {putImage,removeImage} = cropedImageSlice.actions;
export default cropedImageSlice.reducer;