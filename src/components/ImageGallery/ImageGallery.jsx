import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ onClick, status, images }) => (
  <>
    {images.length > 0 || status === 'pending' ? (
      <ul className={css.imageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem key={image.id} data={image} onClick={onClick} />
          );
        })}
      </ul>
    ) : (
      <p
        style={{
          padding: 100,
          textAlign: 'center',
          fontSize: 30,
        }}
      >
        Search results may be here...
      </p>
    )}
  </>
);

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;