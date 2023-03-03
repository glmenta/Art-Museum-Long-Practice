import {NavLink, Switch, Route} from 'react-router-dom'
import GalleryView from '../galleryView';
import './GalleryNavigation.css';

const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return (
        <div>
            <nav>
            {/* <NavLink to ='/'>
            <h1>Galleries</h1>
            </NavLink> */}
            {galleries.map((gallery) => (
                <span key={gallery.id} >
                    <NavLink to={`/galleries/${gallery.id}`} >
                        {gallery.name}
                    </NavLink>
                </span>
            ))}
            </nav>
            <Route path='/galleries/:galleryId'>
                <GalleryView galleries={galleries}/>
            </Route>
        </div>
    )
}

export default GalleryNavigation
