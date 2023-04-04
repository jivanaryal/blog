import axios from "axios";

const API_BASE_URL = "https://kalikablog.onrender.com/blog";

export const get = (url, params) => {
  return axios.get(API_BASE_URL + url, { params });
};
