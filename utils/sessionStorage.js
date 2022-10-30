export const keys = {
  token: 'token',
};

export const saveToStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromStorage = key => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.sessionStorage.getItem(key));
  }
};

export const removeFromStorage = key => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.removeItem(key);
  }
};
