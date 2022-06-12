import axios from 'axios';

export default axios.create({
  baseURL: `https://mask-3.herokuapp.com/api/`
});