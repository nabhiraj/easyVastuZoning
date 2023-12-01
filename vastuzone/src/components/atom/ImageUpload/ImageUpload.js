import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import pageStyle from './ImageUpload.module.css'
import { useRef, useState } from "react";
function ImageUpload() {
    let cropRef = useRef();
    let [cropedImage,setCropedImage] = useState();
    function handleCropAction(){
        let dataUrl = cropRef.current?.cropper.getCroppedCanvas().toDataURL();
        setCropedImage(dataUrl);
    }
    return (
            <div className={pageStyle.mainCropComponent}>
                <div className={pageStyle.flexContainerWithCenter}>
                    Crop the image of house plan
                </div>
                <div>
                    <Cropper
                        ref={cropRef}
                        className='joke'
                        style={{ height: 500, width: '100%' }}
                        zoomTo={1}
                        initialAspectRatio={1}
                        src={"http://localhost:3000/jump.jpg"}
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
                    <button onClick={handleCropAction}>Crop and start</button>
                </div>
                {cropedImage && <img src={cropedImage}></img>}
            </div>
        
    );
}
export default ImageUpload;