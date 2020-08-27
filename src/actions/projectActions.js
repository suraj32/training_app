import { PROJECT_REDUCER } from "../shared/actionConstants";

export const getProjects = () => {
  return {
    type: PROJECT_REDUCER.GET_PROJECTS
  }
}

export const setProjects = data => {
  return {
    type: PROJECT_REDUCER.SET_PROJECTS,
    value: data
  }
}
