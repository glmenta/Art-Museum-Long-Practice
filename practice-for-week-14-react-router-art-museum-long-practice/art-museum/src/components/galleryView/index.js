import {useParams, Route, Switch} from 'react-router-dom'

const GalleryView = ({galleries}) => {
    const {galleryId} = useParams()
    console.log('id',galleryId)
    const galleryChoice = galleries.find((gallery) => gallery.id === +galleryId)
    console.log(galleryChoice)
    return (
        <div>
        <h2>{galleryChoice.name}</h2>
        </div>
    )
}

export default GalleryView
