// import React from 'react';
// import PropTypes from 'prop-types';
// import style from './Modal.module.css';

// const Modal = ({ modalImage, closeModal }) => {
//   return (
//     <div onClick={closeModal} className={style.Overlay}>
//       <div className={style.Modal}>
//         <img src={modalImage} alt="" />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   modalImage: PropTypes.string.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };

// export default Modal;

import React, { Component, createRef } from 'react';
import style from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.closeModal();
  };

  handleBackdropClick = (e) => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div onClick={this.handleBackdropClick} className={style.Overlay}>
        <div className={style.Modal}>{children}</div>
      </div>,
      MODAL_ROOT
    );
  }
}
