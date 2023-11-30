class ZoneUtil{
    static zoneDeg = {
        "N": {
          "degrees": 0
        },
        "ENN": {
          "degrees": 22.5
        },
        "EN": {
          "degrees": 45
        },
        "EEN":{
            "degrees": 67.5
        },
        "E": {
          "degrees": 90
        },
        "EES": {
          "degrees": 112.5
        },
        "ES": {
          "degrees": 135
        },
        "ESS": {
          "degrees": 157.5
        },
        "S": {
          "degrees": 180
        },
        "SSW": {
          "degrees": 202.5
        },
        "SW": {
          "degrees": 225
        },
        "SWW": {
          "degrees": 247.5
        },
        "W": {
          "degrees": 270
        },
        "NWW": {
          "degrees": 292.5
        },
        "NW": {
          "degrees": 315
        },
        "NNW": {
          "degrees": 337.5
        }
      };
    
    static drawBasicDirectionLine(canvasObj,lineLength){
        canvasObj.beginPath();
        canvasObj.moveTo(0,0);
        canvasObj.lineTo(0,lineLength);
        canvasObj.stroke();
        canvasObj.closePath();
    }
    
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    static drawZone(canvasObj,deg,lineLength){
        console.log('drawing done at deg ',deg);
        canvasObj.save();
        canvasObj.rotate(ZoneUtil.degreesToRadians(deg));
        ZoneUtil.drawBasicDirectionLine(canvasObj,lineLength);
        canvasObj.restore();
    }

    static drawZones(canvasObj,zones,lineLength){
        for(let i=0;i<zones.length;i++){
            ZoneUtil.drawZone(canvasObj,ZoneUtil.zoneDeg[zones[i]].degrees,lineLength);
        }
    }

    
}
export default ZoneUtil;