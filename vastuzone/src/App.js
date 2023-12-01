import ZoneMapWithControls from "./components/molecules/ZoneMapWithControls/ZoneMapWithControls";
import ImageUpload from "./components/atom/ImageUpload/ImageUpload";
import { useState } from "react";
function App() {
  let [cropDone,setCropDone] = useState(false);
  return (
    <div className="App">
        {!cropDone && <ImageUpload signalCropDone={()=>{setCropDone(true)}}></ImageUpload>}
        {cropDone && <ZoneMapWithControls></ZoneMapWithControls>}
    </div>
  );
}
export default App;
//<ZoneMap zoneList={['N']} angleShift={288}></ZoneMap>

/**
<div>simeple text</div>
        <ZoneMapWithControls></ZoneMapWithControls>
*/
//<ImageUpload></ImageUpload>