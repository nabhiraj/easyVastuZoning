import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      <MainPage></MainPage>
      <div style={{ margin: '10px' }}>
        How to use this application
        <ul>
          <li>
            First, select the image of the house or plot map you want to zone.
          </li>
          <li>
            crop the image appropriately; make sure no other content is included other than the house map. Select the centre carefully.
          </li>
          <li>
            crop and confirm the selected image.
          </li>
          <li>
            Now you will be redirected to the zoner screen, where you can see all the zones along with their colour and label.

          </li>
          <li>
            Select zone, color, and  label according to your needs, and analyse the vastu of the house map.
          </li>
        </ul>
      </div>
      <div style={{ margin: '10px' }}>
        <div>Notice</div>
        <div>
          We do not take any responsibility or guarantee for the correctness of
          this application, the user should double-confirm the
          results by himself or herself, this application or its owner will
          not be responsible for any error caused by this system.
        </div>
      </div>
    </div>
  );
}
export default App;