import { API_REQUEST_SUCCESS, API_REQUEST_ERROR } from './types';

export default (state='', action)=>{
  switch(action.type){
    case 'API_REQUEST_SUCCESS':
      return action.contents
    case 'API_REQUEST_ERROR' :
      return action.error
    default:
      return state
  }
}