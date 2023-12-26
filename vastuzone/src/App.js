import MainPage from "./pages/MainPage";
function App() {
  
  return (
    <div className="App">
        <MainPage></MainPage>
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

/**
 * let [cropDone,setCropDone] = useState(false);
 * {!cropDone && <ImageCropper signalCropDone={()=>{setCropDone(true)}}></ImageCropper>}
        {cropDone && <ZoneMapWithControls></ZoneMapWithControls>}
 */