import { useEffect, useRef, useState } from "react";
import { UseSelector, useDispatch} from "react-redux";
import {putImage,removeImage} from "../../../reduxState/imageState";
//import {putImage,removeImage} from "../../../reduxState/cropedImageState";

function MapFilePicker({signalImageSelected=()=>{}}){
    let inputFileRef = useRef();
    let dispatch = useDispatch();
    
    function readSelectedFileIntoImageState(event){
        let reader = new FileReader();
        if(event.target.files && event.target.files.length == 0 ){
            console.log('no file is selected');
            return;
        }
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = ()=>{
            dispatch(putImage(reader.result));
            signalImageSelected();
        }
        reader.onerror = ()=>{
            console.log('error occured while reading ');
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