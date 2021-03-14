import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    console.log(this.state);
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={style.SearchForm_input}
            type="text"
            value={this.query}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
