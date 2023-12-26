import { useRef,useEffect } from 'react';
import pageStyle from './style.module.css'
import graphUtil from './zoneMapUtil';
function ZoneMap({zoneList=['N'],angleShift=50,imageUrl=''}){
    let canvasRef = useRef();
    let canvasObj;
    
    useEffect(()=>{
        canvasObj=canvasRef.current.getContext('2d');
        let height = canvasRef.current.height;
        let width = canvasRef.current.width;
        canvasObj.clearRect(0, 0,width,height);
        if(imageUrl){
            console.log('the image url is ',imageUrl);
            graphUtil.drawHomeMap(canvasObj,imageUrl,angleShift,zoneList,height,width);
        }
    });

    return (
        <div>
            <canvas className={pageStyle.canvasBorder} ref={canvasRef} width="430" height="430"></canvas>
        </div>
    );
}
export default ZoneMap;