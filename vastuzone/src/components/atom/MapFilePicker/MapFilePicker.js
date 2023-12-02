import { useEffect, useRef, useState } from "react";
import { UseSelector, useDispatch} from "react-redux";
import {putImage,removeImage} from "../../../reduxState/imageState";
//import {putImage,removeImage} from "../../../reduxState/cropedImageState";

function MapFilePicker({signalImageSelected=()=>{}}){
    let inputFileRef = useRef();
    let dispatch = useDispatch();
    
    function readSelectedFileIntoImageState(event){
        let reader = new FileReader();
        console.log('the event is ',event);
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = ()=>{
            dispatch(putImage(reader.result));
            signalImageSelected();
        }
    }

    return (
        <div>
            <div>select the image file</div>
            <input ref={inputFileRef} onChange={(e)=>{ readSelectedFileIntoImageState(e); }} type="file"></input>
        </div>
    );
}
export default MapFilePicker;