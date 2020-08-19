import axios from 'axios';
import { API_HOST_URL } from "../shared/appConstants"

export const callApi = (path, method, data) => {
  return axios({
    method,
    url: `${API_HOST_URL}${path}`,
    data
  });
};
