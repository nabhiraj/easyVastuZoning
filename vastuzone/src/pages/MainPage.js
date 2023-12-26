import { useState } from "react";
import MapFilePicker from "../components/atom/MapFilePicker/MapFilePicker";
import ImageCropper from "../components/atom/ImageCropper/ImageCropper";
import { UseSelector, useSelector } from "react-redux";
import ZoneMapWithControls from "../components/molecules/ZoneMapWithControls/ZoneMapWithControls";

function MainPage(){
    let [imageSelected,setImageSelected] = useState(false);
    let [imageCropped,setImageCropped] = useState(false);
    let selectedImage = useSelector(state=>state.imageState.value);
    return (
        <div style={{marginLeft:'12px'}}>
            <h2> Easy vastu zonning </h2>
            <MapFilePicker signalImageSelected={()=>{
                setImageSelected(true);
                setImageCropped(false);
                }}></MapFilePicker>
            {imageSelected && !imageCropped && <ImageCropper imageLink={selectedImage} signalCropDone={()=>{ setImageCropped(true); }}></ImageCropper>}
            { (imageCropped && imageSelected) && <ZoneMapWithControls></ZoneMapWithControls> }
        </div>
    );
}
export default MainPage;