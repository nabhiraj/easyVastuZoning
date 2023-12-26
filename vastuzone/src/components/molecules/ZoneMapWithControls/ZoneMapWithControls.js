import { useState } from "react";
import Select from 'react-select';
import ZoneMap from "../../atom/ZoneMap/ZoneMap";
import ZoneMapControlUtil from "./ZoneMapControlUtil";
import { useSelector} from "react-redux";
import pageStyle from "./zoneMapControl.module.css";

function ZoneMapWithControls(){
    let [selectedZone,setSelectedZones] = useState(ZoneMapControlUtil.vastuZoneOptions);
    let [angleShift,setAngleShift] = useState(0);
    let [colorDensity,setColorDensity] = useState(10);
    let [showZoneLabel,setZoneLabel] = useState(true);
    let croppedImage = useSelector(state=>state.cropImageState.value);
    return (
        <div className={pageStyle.horizontalFlex}>
            <ZoneMap  zoneList={selectedZone.map(x=>x.value)} angleShift={angleShift} opacity={colorDensity/100} showZoneLabel={showZoneLabel} imageUrl={croppedImage}></ZoneMap>
            <div className={pageStyle.verticalFlex}>
                <div className={pageStyle.controlOptions}>
                    <label> direction from north </label>
                    <input  type="number" min={0} value={angleShift} onChange={(e)=>{ setAngleShift(parseInt(e.target.value)); }}></input>
                </div>
                <div className={pageStyle.controlOptions}>
                    <label> color density </label>
                    <input type="number" min={0} max={100} value={colorDensity} onChange={(e)=>{setColorDensity(e.target.value)}}></input>
                </div>
                <div className={pageStyle.controlOptions}>
                    <label> display the zone labels </label>
                    <input type="checkbox" checked={showZoneLabel} onChange={()=>{ if(showZoneLabel){
                        setZoneLabel(false);
                    }else{
                        setZoneLabel(true);
                    } }}/>
                </div>
                <div className={pageStyle.controlOptions}>
                    <label>zones to display</label>
                    <Select   options={ZoneMapControlUtil.vastuZoneOptions} value={selectedZone} onChange={(e)=>{setSelectedZones(e);}} isMulti />
                </div>
            </div>
        </div>
    );
}

export default ZoneMapWithControls;
    