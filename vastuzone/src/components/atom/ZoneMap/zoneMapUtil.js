class ZoneUtil{
    static zoneDeg = {
      "N": {
        "degrees": 0,
        "color": "#5d7eba"
      },
      "ENN": {
        "degrees": 22.5,
        "color": '#5d7eba'
      },
      "EN": {
        "degrees": 45,
        "color": "#52c45a"
      },
      "EEN": {
        "degrees": 67.5,
        "color": "#52c45a"
      },
      "E": {
        "degrees": 90,
        "color": "#52c45a"
      },
      "EES": {
        "degrees": 112.5,
        "color": "#52c45a"
      },
      "ES": {
        "degrees": 135,
        "color": "#d11117"
      },
      "ESS": {
        "degrees": 157.5,
        "color": "#d11117"
      },
      "S": {
        "degrees": 180,
        "color": "#d11117"
      },
      "SSW": {
        "degrees": 202.5,
        "color": "#d1b111"
      },
      "SW": {
        "degrees": 225,
        "color": "#d1b111"
      },
      "SWW": {
        "degrees": 247.5,
        "color": "#d1b111"
      },
      "W": {
        "degrees": 270,
        "color": "#f0ebd1"
      },
      "NWW": {
        "degrees": 292.5,
        "color": "#f0ebd1"
      },
      "NW": {
        "degrees": 315,
        "color": "#f0ebd1"
      },
      "NNW": {
        "degrees": 337.5,
        "color": "#f0ebd1"
      }
    };
    
    static drawBasicDirectionLine(canvasObj,lineLength){
        canvasObj.beginPath();
        canvasObj.moveTo(0,0);
        canvasObj.lineTo(0,lineLength);
        canvasObj.stroke();
        canvasObj.closePath();
    }

    static drawBasicZone(canvasObj,lineLength,color,opacity){
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
      canvasObj.globalAlpha = opacity;
      canvasObj.fill();
      //now we have to write the text also
    }
    
    static degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    static drawZone(canvasObj,deg,lineLength,color,opacity,zoneName,showZoneLabel){
        canvasObj.save();
        canvasObj.rotate(ZoneUtil.degreesToRadians(deg));
        ZoneUtil.drawBasicZone(canvasObj,lineLength,color,opacity);
        canvasObj.restore();
        if(showZoneLabel){
          canvasObj.save();
          canvasObj.rotate(ZoneUtil.degreesToRadians(deg));
          canvasObj.strokeStyle = 'black';
          canvasObj.globalAlpha = 1;
          canvasObj.strokeText(zoneName,0,-200);
          canvasObj.font = "30px";
          canvasObj.restore();
        }
    }

    static drawZones(canvasObj,zones,lineLength,opacity,showZoneLabel){
        for(let i=0;i<zones.length;i++){
            ZoneUtil.drawZone(canvasObj,ZoneUtil.zoneDeg[zones[i]].degrees,lineLength,ZoneUtil.zoneDeg[zones[i]].color,opacity,zones[i],showZoneLabel);
        }
    }

    static confugreAndDrawZones(canvasObj,angleShift,zoneList,height,width,opacity,showZoneLabel){
        canvasObj.save();
        canvasObj.translate(width/2,height/2);
        canvasObj.save();
        canvasObj.rotate(ZoneUtil.degreesToRadians(angleShift));
        canvasObj.save();
        ZoneUtil.drawZones(canvasObj,zoneList,-1*(height+width),opacity,showZoneLabel);
        canvasObj.restore();
        canvasObj.restore();
        canvasObj.restore();
    }

    static drawHomeMap(canvasObj,imageLink,angleShift,zoneList,height,width,opacity,showZoneLabel){
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
        canvasObj.drawImage(temp,canvas_x,canvas_y,canvasImageWidth,canvasImageHeight);
        ZoneUtil.confugreAndDrawZones(canvasObj,angleShift,zoneList,height,width,opacity,showZoneLabel);
      };
      temp.src = imageLink;
    }

    
}
export default ZoneUtil;