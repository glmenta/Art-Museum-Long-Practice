import GalleryNavigation from "./components/galleryNavigation";
import {Route, Switch} from 'react-router-dom';
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/galleryView";

function App() {
  // console.log(harvardArt.records)
  return (
      <div className='pageWrapper'>

      <Switch>
        <Route path='/galleries'>
          <GalleryNavigation galleries={harvardArt.records}/>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
