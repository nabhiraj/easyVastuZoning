import { useState } from "react";
import Select from 'react-select';
import ZoneMap from "../../atom/ZoneMap/ZoneMap";
import ZoneMapControlUtil from "./ZoneMapControlUtil";
import { useSelector} from "react-redux";

function ZoneMapWithControls(){
    let [zoneList,setZoneList] = useState([]);
    let [angleShift,setAngleShift] = useState(0);
    let croppedImage = useSelector(state=>state.cropImageState.value);
    console.log('the value of angle shift is ',angleShift);
    return (
        <div>
            <ZoneMap  zoneList={zoneList} angleShift={angleShift} imageUrl={croppedImage}></ZoneMap>
            <div>
                <input type="number" min={0} value={angleShift} onChange={(e)=>{ setAngleShift(parseInt(e.target.value)); }}></input>
                <Select options={ZoneMapControlUtil.vastuZoneOptions}  onChange={(e)=>{setZoneList(e.map(x=>x.value));}} isMulti />
            </div>
            
        </div>
    );
}

export default ZoneMapWithControls;