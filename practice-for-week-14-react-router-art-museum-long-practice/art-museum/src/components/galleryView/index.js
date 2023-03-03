import {useParams, Route, Switch} from 'react-router-dom'
import ArtImageTile from '../ArtImageTile/ArtImageTile';
const GalleryView = ({galleries}) => {
    const {galleryId} = useParams()
    const galleryChoice = galleries.find((gallery) => gallery.id === +galleryId)


    return (
        <div>
        <h2>{galleryChoice.name}</h2>
        <div>
        <Route exact path='/galleries/:galleryId'>

        </Route>
        </div>
        </div>
    )
}

export default GalleryView
