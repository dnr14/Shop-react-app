import { USER_UPDATE, USER_UPDATE_ERROR, USER_UPDATE_SUCCESS } from 'actions/userPasswordUpdateAction';

export default function userPasswordUpdateReducer(state, action) {

  switch (action.type) {
    case USER_UPDATE:
      return {
        loading: true,
        success: null,
        error: null
      }
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: null
      }
    case USER_UPDATE_ERROR:
      return {
        loading: false,
        success: false,
        error: action.error
      }
    default:
      throw new Error('update reducer에 없는 액션입니다.')
  }

}
