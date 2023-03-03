import GalleryNavigation from "./components/galleryNavigation";
import {Route, Switch} from 'react-router-dom';
import harvardArt from "./data/harvardArt";

function App() {
  // console.log(harvardArt.records)
  return (

      <GalleryNavigation galleries={harvardArt.records}/>

  );
}

export default App;
