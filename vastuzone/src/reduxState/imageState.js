import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {},
}

const imageSlice = createSlice({
    name:'imageState',
    initialState,
    reducers:{
        putImage: (state,action)=>{state.value = action.payload},
        removeImage: (state)=>{state.value=''}
    }
}); 

export const {putImage,removeImage} = imageSlice.actions;
export default imageSlice.reducer;