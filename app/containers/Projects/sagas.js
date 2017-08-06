import { take, call, put, select } from 'redux-saga/effects';

// Your sagas for this container
export default [
  sagaName,
];

// Individual exports for testing
export function* sagaName() {

}

export function* getProjects () {
	yield call(axios.get, 'http://127.0.0.1:8000/api/projects/', params: {ordering: 'pk'}).then( 
		(success) => {
			return success
		},
		(error) => {
			console.log('Could not fetch projects', error);
			return error
		})
}

export function* getProjectDetail (id) {
	return axios.get('http://127.0.0.1:8000/api/projects/' + id)
}