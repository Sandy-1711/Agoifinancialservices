
import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_REQUEST_SUCCEEDED,
  GET_USER_LIST_REQUEST_FAILED,

  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,

  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,

  CREATE_USERS,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_FAILED,

} from './actions'


const initState = {
  isLoading: false,
  userList: {},
}

export default function (state = { ...initState }, action) {
  switch (action.type) {

    case GET_USER_LIST_REQUEST:
      return { ...state, isLoading: true }

    case GET_USER_LIST_REQUEST_SUCCEEDED:
      return { ...state, isLoading: false, userList: action.payload }

    case GET_USER_LIST_REQUEST_FAILED:
      return { ...state, isLoading: false, userList: {} }


    case DELETE_USER : 
      return {...state , isLoading : true}
    

    case DELETE_USER_SUCCESS : 
      return {...state , isLoading : false}
    

    case DELETE_USER_FAILED : 
      return {...state , isLoading : false}
    

    case UPDATE_USER : 
      return {...state , isLoading : true}

    case UPDATE_USER_SUCCESS : 
      return {...state , isLoading : false}
    
    case UPDATE_USER_FAILED : 
      return {...state, isLoading : false}
      

    case CREATE_USERS : 
      return {...state , isLoading : true}

    case CREATE_USERS_SUCCESS : 
      return {...state , isLoading : false}
    
    case CREATE_USERS_FAILED : 
      return {...state, isLoading : false}

    default:
      return state
  }


}