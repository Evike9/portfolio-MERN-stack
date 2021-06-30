import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error.response.data;
  }

  throw error;
}

const apiHandler = {
  service,

  createProject(data) {
    return service
      .post("/projects", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getProjects() {
    return service
      .get("/projects")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getProject(projectId){
    return service
    .get(`/projects/${projectId}`)
    .then((res) => res.data)
    .catch(errorHandler);
  },
  


  updateProject(projectId, data) {
    return service
      .patch(`/projects/${projectId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteProject(projectId) {
    return service
      .delete(`/projects/${projectId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
