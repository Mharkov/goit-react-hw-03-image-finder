import React, { Component } from 'react';
import style from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
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
