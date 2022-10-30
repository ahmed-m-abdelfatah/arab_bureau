import { getFromStorage, keys } from './sessionStorage.js';

const baseUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_CHANNEL}`;

const getToken = () => {
  // get token more than one
  if (typeof window != 'undefined') {
    return process.env.NEXT_PUBLIC_BEARER_SECRETE + ' ' + getFromStorage(keys.token);
  }
};

const getAllJobs = {
  method: 'GET',
  url: `${baseUrl}/job/all`,
};

const deleteJobs = id => ({
  method: 'DELETE',
  url: `${baseUrl}/job/${id}/delete`,
  headers: {
    Authorization: getToken(),
  },
});

const signup = body => ({
  method: 'POST',
  url: `${baseUrl}/auth/signup`,
  data: body,
});

const login = body => ({
  method: 'POST',
  url: `${baseUrl}/auth/login`,
  data: body,
});

const logout = token => ({
  method: 'POST',
  url: `${baseUrl}/auth/logout`,
  headers: {
    Authorization: token ? process.env.NEXT_PUBLIC_BEARER_SECRETE + ' ' + token : getToken(),
  },
});

const displayAdminData = token => ({
  method: 'GET',
  url: `${baseUrl}/admin`,
  headers: {
    Authorization: token ? process.env.NEXT_PUBLIC_BEARER_SECRETE + ' ' + token : getToken(),
  },
});

const addJob = body => ({
  method: 'POST',
  url: `${baseUrl}/job/add`,
  data: body,
  headers: {
    Authorization: getToken(),
  },
});

const editJob = (id, body) => ({
  method: 'PATCH',
  url: `${baseUrl}/job/${id}/update`,
  data: body,
  headers: {
    Authorization: getToken(),
  },
});

const updateProfile = body => ({
  method: 'PATCH',
  url: `${baseUrl}/admin/update`,
  data: body,
  headers: {
    Authorization: getToken(),
  },
});

const updatePassword = body => ({
  method: 'PATCH',
  url: `${baseUrl}/admin/password`,
  data: body,
  headers: {
    Authorization: getToken(),
  },
});

const deleteProfile = (token, body) => ({
  method: 'DELETE',
  url: `${baseUrl}/admin/profile/delete`,
  data: body,
  headers: {
    Authorization: token ? process.env.NEXT_PUBLIC_BEARER_SECRETE + ' ' + token : getToken(),
  },
});

const axiosServiceObj = {
  getAllJobs,
  deleteJobs,
  signup,
  login,
  logout,
  displayAdminData,
  addJob,
  editJob,
  updateProfile,
  updatePassword,
  deleteProfile,
};

export default axiosServiceObj;
