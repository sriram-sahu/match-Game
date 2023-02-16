import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, updateMatchCount} = props
  const {id, thumbnailUrl} = thumbnailItem

  const matchThumbnailUrl = () => {
    updateMatchCount(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={matchThumbnailUrl}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
