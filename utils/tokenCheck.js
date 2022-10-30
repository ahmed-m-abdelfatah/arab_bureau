import { default as jwt } from 'jsonwebtoken';
import { useRouter } from 'next/router.js';
import { useEffect } from 'react';
import { getFromStorage, keys, removeFromStorage } from './sessionStorage.js';

export const verifyToken = token => {
  const decoded = jwt.decode(token);
  return decoded?.isSignedIn === true;
};

export const isTokenStillValid = () => {
  const token = getFromStorage(keys.token);
  const decoded = jwt.decode(token);
  const future = decoded.jwtExpiration;
  const current = Math.floor(Date.now() / 1000);
  return future > current;
};

export const checkTokenValid = () => {
  return () => {
    const router = useRouter();

    useEffect(() => {
      if (isTokenStillValid() === false) {
        // remove token
        removeFromStorage(keys.token);

        // go to login
        router.replace('/admin/login');
      }
    }, []);
  };
};
