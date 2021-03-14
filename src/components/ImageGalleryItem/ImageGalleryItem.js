import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <div>
      <li
        onClick={() => openModal(modalImage)}
        className={style.ImageGalleryItem}
      >
        <img src={url} alt={alt} className={style.ImageGalleryItem_image} />
      </li>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
// const ImageGalleryItem = ({ id, webformat, tags, showLargeImage }) => {
//   return (
//     <li id={id} onClick={() => showLargeImage(id)}>
//       <img
//         src={webformat}
//         alt={tags}
//         // className={styles.ImageGalleryItem_image}
//       />
//     </li>
//   );
// };
