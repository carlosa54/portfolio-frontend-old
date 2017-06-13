var axios = require('axios');

function getProjects () {
	return axios.get('http://127.0.0.1:8000/api/projects/?ordering=pk')
}

function getProjectDetail (id) {
	return axios.get('http://127.0.0.1:8000/api/projects/' + id)
}

function getSkills () {
	return axios.get('http://127.0.0.1:8000/api/skills/')
}

function getWorks () {
	return axios.get('http://127.0.0.1:8000/api/works/')
}

function getWorkDetail (id) {
	return axios.get('http://127.0.0.1:8000/api/works/' + id )
}

module.exports = {
	fetchProjects: function() {
		return getProjects()
	},
	getProjectDetail: function(id) {
		return getProjectDetail(id)
	},
}
