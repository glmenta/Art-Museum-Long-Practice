import GalleryNavigation from "./components/galleryNavigation";
import {Route, Switch} from 'react-router-dom';
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/galleryView";

function App() {
  // console.log(harvardArt.records)
  return (
      <div className='pageWrapper'>

      <Switch>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
          <GalleryNavigation galleries={harvardArt.records}/>
        </Route>
        <Route path='/galleries'>
          <GalleryNavigation galleries={harvardArt.records}/>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
