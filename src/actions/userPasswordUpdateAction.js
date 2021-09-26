export const USER_UPDATE = "USER_UPDATE";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_ERROR = "USER_UPDATE_ERROR";

export const getUserUpdateAction = () => ({ type: USER_UPDATE });
export const getUserUpdateErrorAction = (error) => ({ type: USER_UPDATE_ERROR, error })
export const getUserUpdateSuccessAction = () => ({ type: USER_UPDATE_SUCCESS });


