import { LOGIN, SIGN_OUT } from './actionTypes';

export const signInAction = () => ({
  type: LOGIN,
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});
