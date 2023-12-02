import { useState } from "react";
import MapFilePicker from "../components/atom/MapFilePicker/MapFilePicker";
import ImageCropper from "../components/atom/ImageCropper/ImageCropper";
import { UseSelector, useSelector } from "react-redux";
import ZoneMapWithControls from "../components/molecules/ZoneMapWithControls/ZoneMapWithControls";

function MainPage(){
    let [imageSelected,setImageSelected] = useState(false);
    let [imageCropped,setImageCropped] = useState(false);
    let selectedImage = useSelector(state=>state.imageState.value);
    //get the right image which is selected from the redux thing.
    return (
        <div>
            <MapFilePicker signalImageSelected={()=>{
                setImageSelected(true);
                setImageCropped(false);
                }}></MapFilePicker>
            {imageSelected && !imageCropped && <ImageCropper imageLink={selectedImage} signalCropDone={()=>{ setImageCropped(true); }}></ImageCropper>}
            {(imageCropped && imageSelected) && <ZoneMapWithControls></ZoneMapWithControls> }
        </div>
    );
}
export default MainPage;
