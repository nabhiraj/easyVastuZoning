import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import pageStyle from './ImageCropper.module.css'
import { useRef, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import {putImage,removeImage} from '../../../reduxState/cropedImageState';
function ImageCropper({imageLink="http://localhost:3000/jump.jpg",signalCropDone=()=>{}}) {
    let cropRef = useRef();
    let [cropedImage,setCropedImage] = useState();
    let dispatch = useDispatch();
    function handleCropAction(){
        let dataUrl = cropRef.current?.cropper.getCroppedCanvas().toDataURL();
        setCropedImage(dataUrl);
    }
    return (
            <div className={pageStyle.mainCropComponent}>
                <div className={pageStyle.horizontalFlexContainer}>
                    <div className={pageStyle.imageCropContainer}>
                        <div className={pageStyle.flexContainerWithCenter}>
                            Crop the image of house plan
                        </div>
                        <div>
                            <Cropper
                                ref={cropRef}
                                style={{ height: 500, width: '100%' }}
                                zoomTo={1}
                                initialAspectRatio={1}
                                src={imageLink}
                                viewMode={1}
                                minCropBoxHeight={50}
                                minCropBoxWidth={50}
                                background={true}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                guides={false}
                            />
                        </div>
                        <div className={pageStyle.flexContainerWithCenter}>
                            <button onClick={handleCropAction}>Crop</button>
                        </div>
                    </div>
                    {cropedImage && 
                    <div className={pageStyle.imagePreviewContainer}>
                        <div> privew of image </div>
                        <img src={cropedImage}/>
                        <div> <button onClick={()=>{
                            dispatch(putImage(cropedImage));
                            signalCropDone();
                            console.log('done with dispatching ');
                        }}> done </button> </div>
                    </div>
                    }
                </div>
            </div>
        
    );
}
export default ImageCropper;