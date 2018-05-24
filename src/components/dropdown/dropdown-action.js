import api from '../../services/api';
import { API_REQUEST_SUCCESS, API_REQUEST_ERROR } from './types';


export const apiRequestSuccess = (contents) => ({
  type: 'API_REQUEST_SUCCESS',
  contents
})

export const apiRequestError = (error) => ({
  type: 'API_REQUEST_ERROR',
  error
});

//thunk action
export const contentApiRequest = () => (dispatch) => {
  return api.contents()
    .then(contents => dispatch(apiRequestSuccess(contents.data)))
    .catch(err => dispatch(apiRequestError(err.response.status)));
}