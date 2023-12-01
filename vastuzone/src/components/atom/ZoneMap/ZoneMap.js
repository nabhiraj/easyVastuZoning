import { useRef,useEffect } from 'react';
import pageStyle from './style.module.css'
import graphUtil from './zoneMapUtil';
function ZoneMap({zoneList=['N'],angleShift=50,imageUrl=''}){
    let canvasRef = useRef();
    let canvasObj;
    //angleInRadians.toFixed(4);
    useEffect(()=>{
        canvasObj=canvasRef.current.getContext('2d');
        let height = canvasRef.current.height;
        let width = canvasRef.current.width;
        canvasObj.clearRect(0, 0,width,height);
        canvasObj.save();
        canvasObj.translate(width/2,height/2);
        canvasObj.save();
        canvasObj.rotate(graphUtil.degreesToRadians(angleShift));
        canvasObj.save();
        graphUtil.drawZones(canvasObj,zoneList,-1*(height+width));
        canvasObj.restore();
        canvasObj.restore();
        canvasObj.restore();
    });

    return (
        <div>
            <canvas className={pageStyle.canvasBorder} ref={canvasRef} width="400" height="400"></canvas>
        </div>
    );
}
export default ZoneMap;