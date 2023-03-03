import GalleryView from "../galleryView"
import { Link } from 'react-router-dom'
const ArtImageTile = ({art, artId, gallery, galleries}) => {

    return (
        <Link to={`/galleries/${gallery.id}/art/${art.id}`}>

        </Link>
    )
}

export default ArtImageTile
