import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import pageStyle from './ImageCropper.module.css'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putImage, removeImage } from '../../../reduxState/cropedImageState';
function ImageCropper({ imageLink, signalCropDone = () => { } }) {
  let cropRef = useRef();
  let [cropedImage, setCropedImage] = useState();
  let dispatch = useDispatch();
  let [CropperSize,setCropperSize] = useState({width:500,height:500});
  function handleCropAction() {
    let dataUrl = cropRef.current?.cropper.getCroppedCanvas().toDataURL();
    setCropedImage(dataUrl);
  }

  useLayoutEffect(()=>{
    let img = new Image(imageLink);
    let imgHeight = img.height;
    let imgWidth = img.width;
    let asspectRatio = imgWidth/imgHeight;
    let maxWidth = window.innerWidth*(30/100);
    let maxHeight = window.innerHeight*(60/100);
    if(imgHeight>=imgWidth){
      imgHeight = maxHeight;
      imgWidth = parseInt(imgWidth/asspectRatio);
    }else{
      imgWidth = maxWidth;
      imgHeight = parseInt(imgWidth/asspectRatio);
    }
    setCropperSize({height:imgHeight,width:imgWidth});
  },[imageLink]);
  
  return (
    <div className={pageStyle.mainCropComponent}>
      <div className={pageStyle.horizontalFlexContainer}>
        <div className={pageStyle.imageCropContainer}>
          <div className={pageStyle.flexContainerWithCenter}>
            Crop the image of house plan
          </div>
          <div style={CropperSize}>
            <Cropper
              ref={cropRef}
              zoomTo={0}
              initialAspectRatio={1}
              style={{ width: '100%', height: '100%' }}
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
            <img style={CropperSize} src={cropedImage} />
            <div> <button onClick={() => {
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


/** (i will use this tomm)
 * 
 * const getImageSize = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = imageUrl;
  });
};

// Usage:
const imageUrl = 'https://example.com/image.jpg'; // Replace with your image URL
getImageSize(imageUrl)
  .then(({ width, height }) => {
    console.log(`Image width: ${width}, height: ${height}`);
  })
  .catch((error) => {
    console.error('Error loading image:', error);
  });
 */