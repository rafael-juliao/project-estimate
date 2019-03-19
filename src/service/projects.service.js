const api = require ('./api')

api.ENDPOINT('http://localhost:5000')

// route => /projects
exports.getProjects = (query = {}) => api.GET('/projects', query)
exports.postProject = (project) => api.POST('/projects', project)

// route => /projects/<id>
exports.getProject = (id) => api.GET(`/projects/${id}`);
exports.putProject = (project) => api.PUT('/projects/', project);
