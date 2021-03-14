import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map((el) => (
        <ImageGalleryItem
          key={el.id}
          url={el.webformatURL}
          alt={el.tags}
          modalImage={el.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;

// const ImageGallery = ({ images, linkBigImage, openModal }) => {
//   const showLargeImage = (id) => {
//     linkBigImage(id);
//   };

//   return (
//     <div>
//       <ul>
//         {images.map((el) => (
//           <ImageGalleryItem
//             id={el.id}
//             webformat={el.webformatURL}
//             tags={el.tags}
//             modalImage={el.largeImageURL}
//             showLargeImage={showLargeImage}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };
