import axios from 'axios';

const key = '19800508-643be2b5e42611bb65677ceaa';

export const getImages = (query = '', page = 1) => {
  const path = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${key}`;
  return axios.get(path);
};
