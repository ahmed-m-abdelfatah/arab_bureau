import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFromStorage, keys, removeFromStorage } from '../utils/sessionStorage.js';
import { verifyToken } from '../utils/tokenCheck.js';

import style from '../styles/AdminPageSections/ProtectedRoute.module.scss';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [verified, setVerified] = useState(null);
  const paths = {
    login: '/admin/login',
    signup: '/admin/signup',
    admin: '/admin',
  };

  useEffect(() => {
    // check token
    const accessToken = getFromStorage(keys.token);
    const isValid = verifyToken(accessToken);

    // check paths
    switch (isValid) {
      case true: {
        if (pathname !== paths.admin) {
          router.replace(paths.admin);
        }

        setVerified(true);
        break;
      }

      default: {
        removeFromStorage(keys.token);
        if (pathname === paths.admin) {
          router.replace(paths.login);
        }

        setVerified(false);

        break;
      }
    }
  }, []);

  if (verified === true && pathname === paths.admin) {
    return <>{children}</>;
  }

  if (verified === false && pathname !== paths.admin) {
    return <>{children}</>;
  }

  return <section className={style['protected-route']}></section>;
};

export default ProtectedRoute;
