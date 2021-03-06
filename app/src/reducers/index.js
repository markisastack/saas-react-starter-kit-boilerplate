import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import user from './userReducer';
import runtime from './runtime';
import auth from './authReducer';
import onboarding from './onboardingReducer';
import payment from './paymentReducer';

export default combineReducers({
  member: user,
  auth,
  runtime,
  onboarding,
  payment,
  toastr: toastrReducer,
});
