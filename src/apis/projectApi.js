import { callApi } from './apiHelper';

const getProjectsApi = () => callApi('/projects', 'GET');

export default getProjectsApi;
