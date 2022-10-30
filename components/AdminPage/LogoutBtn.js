import { useRouter } from 'next/router.js';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { keys, removeFromStorage } from '../../utils/sessionStorage.js';
import { isTokenStillValid } from '../../utils/tokenCheck';

const LogoutBtn = () => {
  const router = useRouter();
  const { token } = useAuth();

  const handelClick = async () => {
    const res = await axiosRequest(axiosServiceObj.logout(token));

    if (res.status === 200) {
      if (typeof window != 'undefined') {
        removeFromStorage(keys.token);
        router.replace('/admin/login');
      }
    }
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isTokenStillValid()) {
        removeFromStorage(keys.token);
        router.replace('/admin/login');
      }
    }, 1 * 60 * 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Button variant='danger' className='m-3 w-sm-75 text-capitalize' onClick={handelClick}>
      Logout
    </Button>
  );
};

export default LogoutBtn;
