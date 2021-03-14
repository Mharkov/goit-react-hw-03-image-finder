import React, { Component } from 'react';
import * as API from './services/image-api';
import Searchba from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isModalOpen: false,
    isLoading: false,
    error: null,
    linkLargeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.changePage();
    }
  }

  onSubmit = (query) => {
    this.setState({
      query,
      images: [],
      page: 1,
      error: null,
    });
  };

  changePage = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    API.getImages(query, page)
      .then((resData) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          images: [...prevState.images, ...resData.data.hits],
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  openModal = (modalImage) => this.setState({ isModalOpen: true, modalImage });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { images, isModalOpen, modalImage, isLoading, error } = this.state;

    return (
      <>
        {error && <h1>Ошибка</h1>}
        <Searchba onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button changePage={this.changePage} />}

        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
