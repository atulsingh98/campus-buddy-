import { AUTHENTICATION } from "./../actions/Auth";
const intialAuthState = {
  auth: false,
};
const authReducer = (state = intialAuthState, action) => {
  switch (action.type) {
      case AUTHENTICATION:
        return {...state}
      default: 
        return state

  }
};
export default authReducer
