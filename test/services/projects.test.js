service = require('../../src/service/projects.service')

service.postProject({name:'qualvaise'})
    .then(response => {})
    .catch(err => console.log(err.code))