import axiosRequest from './axiosRequest.js';
import axiosServiceObj from './axiosServiceObjects.js';
import { keys, removeFromStorage } from './sessionStorage.js';

const performLogout = async () => {
  try {
    await axiosRequest(axiosServiceObj.logout);
    return true;
  } catch (error) {
    // if any error
    if (typeof window != 'undefined') {
      // delete token
      removeFromStorage(keys.token);
    }

    return false;
  }
};

export default performLogout;
