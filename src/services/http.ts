//@ts-nocheck
import axios from 'axios';

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://api.github.com';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axiosClient.defaults.timeout = 2000;

export function getUsers(username, page) {
  return axiosClient
    .get(`search/users?q=${username}&page=${page}&per_page=9`)
    .then((response) => response.data.items);
}
