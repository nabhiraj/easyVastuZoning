class ZoneUtil{
    static zoneDeg = {
      "N": {
        "degrees": 0,
        "color": "#008000"
      },
      "ENN": {
        "degrees": 22.5,
        "color": 'red'
      },
      "EN": {
        "degrees": 45,
        "color": "#FFFFFF"
      },
      "EEN": {
        "degrees": 67.5,
        "color": "#FFFFFF"
      },
      "E": {
        "degrees": 90,
        "color": "#FFFFFF"
      },
      "EES": {
        "degrees": 112.5,
        "color": "#FFA500"
      },
      "ES": {
        "degrees": 135,
        "color": "#FF0000"
      },
      "ESS": {
        "degrees": 157.5,
        "color": "#FF0000"
      },
      "S": {
        "degrees": 180,
        "color": "#FF0000"
      },
      "SSW": {
        "degrees": 202.5,
        "color": "#8B4513"
      },
      "SW": {
        "degrees": 225,
        "color": "#8B4513"
      },
      "SWW": {
        "degrees": 247.5,
        "color": "#8B4513"
      },
      "W": {
        "degrees": 270,
        "color": "#0000FF"
      },
      "NWW": {
        "degrees": 292.5,
        "color": "#FFFFFF"
      },
      "NW": {
        "degrees": 315,
        "color": "#FFFFFF"
      },
      "NNW": {
        "degrees": 337.5,
        "color": "#F0FFFF"
      }
    };
    
    static drawBasicDirectionLine(canvasObj,lineLength){
        canvasObj.beginPath();
        canvasObj.moveTo(0,0);
        canvasObj.lineTo(0,lineLength);
        canvasObj.stroke();
        canvasObj.closePath();
    }

    static drawBasicZone(canvasObj,lineLength,color){
      let theta = this.degreesToRadians(11.25);
      canvasObj.strokeStyle = 'black';
      canvasObj.lineWidth = 2;
      canvasObj.fillStyle = color;
      canvasObj.beginPath();
      canvasObj.moveTo(0,0);
      canvasObj.lineTo(-1*lineLength*Math.sin(theta),lineLength*Math.cos(theta));
      canvasObj.lineTo(lineLength*Math.sin(theta),lineLength*Math.cos(theta));
      canvasObj.lineTo(0,0);
      canvasObj.closePath();
      canvasObj.stroke();
      canvasObj.globalAlpha = 0.07;
      canvasObj.fill();
    }
    
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    static drawZone(canvasObj,deg,lineLength,color){
        console.log('drawing done at deg ',deg);
        canvasObj.save();
        canvasObj.rotate(ZoneUtil.degreesToRadians(deg));
        ZoneUtil.drawBasicZone(canvasObj,lineLength,color);
        canvasObj.restore();
    }

    static drawZones(canvasObj,zones,lineLength){
        for(let i=0;i<zones.length;i++){
            ZoneUtil.drawZone(canvasObj,ZoneUtil.zoneDeg[zones[i]].degrees,lineLength,ZoneUtil.zoneDeg[zones[i]].color);
        }
    }

    static confugreAndDrawZones(canvasObj,angleShift,zoneList,height,width){
        canvasObj.save();
        canvasObj.translate(width/2,height/2);
        canvasObj.save();
        canvasObj.rotate(ZoneUtil.degreesToRadians(angleShift));
        canvasObj.save();
        ZoneUtil.drawZones(canvasObj,zoneList,-1*(height+width));
        canvasObj.restore();
        canvasObj.restore();
        canvasObj.restore();
    }

    static drawHomeMap(canvasObj,imageLink,angleShift,zoneList,height,width){
      let temp = new Image();
      temp.onload = ()=>{
        let imageHeight = temp.height;
        let imageWidth = temp.width;
        //aspect ration = width/height
        let aspectRatio = imageWidth/imageHeight;
        let canvasImageWidth;
        let canvasImageHeight;
        let canvas_x=0;
        let canvas_y=0;
        if(imageHeight>imageWidth){
          canvasImageHeight = canvasObj.canvas.height;
          canvasImageWidth = aspectRatio*canvasImageHeight;
          let totalCanvasWidth = canvasObj.canvas.width;
          canvas_x = parseInt((totalCanvasWidth - canvasImageWidth)/2);
        }else{
          canvasImageWidth = canvasObj.canvas.width;
          canvasImageHeight = canvasImageWidth/aspectRatio;
          let totalCanvasHeight = canvasObj.canvas.height;
          canvas_y = parseInt((totalCanvasHeight - canvasImageHeight)/2);
        }
        console.log('the image properties are ',temp);
        canvasObj.drawImage(temp,canvas_x,canvas_y,canvasImageWidth,canvasImageHeight);
        ZoneUtil.confugreAndDrawZones(canvasObj,angleShift,zoneList,height,width);
      };
      temp.src = imageLink;
      console.log('end of code');
    }

    
}
export default ZoneUtil;