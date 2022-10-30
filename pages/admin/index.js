import Head from 'next/head.js';
import { useRouter } from 'next/router.js';
import { useEffect } from 'react';
import AddCareerAdmin from '../../components/AdminPage/AddCareerAdmin.js';
import FullScreenModel from '../../components/FormsAndModals/FullScreenModel.js';
import ProtectedRoute from '../../components/ProtectedRoute.js';
import { useAuth } from '../../context/AuthContext.js';
import { useFullScreenModel } from '../../context/FullScreenModelContext.js';
import style from '../../styles/AdminPageSections/ProtectedRoute.module.scss';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { keys, removeFromStorage } from '../../utils/sessionStorage.js';

const AdminPage = props => {
  const { jobList } = props;
  const router = useRouter();
  const { token, adminData, setAdminData } = useAuth();
  const { closeModel } = useFullScreenModel();

  useEffect(() => {
    return () => {
      closeModel();
    };
  }, []);

  useEffect(() => {
    const getAdminName = async () => {
      const res = await axiosRequest(axiosServiceObj.displayAdminData(token));

      if (res?.response?.status === 401 || res?.response?.status === 500) {
        // remove token
        removeFromStorage(keys.token);

        // go to login
        router.replace('/admin/login');
      }

      if (res?.status === 200) {
        setAdminData(res.data);
      }
    };

    getAdminName();
  }, []);

  if (!adminData.name.length) {
    return <section className={style['protected-route']}></section>;
  }

  return (
    <ProtectedRoute>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title data-i18n='arabBureau'>Arab Bureau - Admin</title>
        <meta
          name='keywords'
          content='Arab Bureau for Design and Engineering Consultations Design., egypt, Engineering , Consultations , production , egypt, loading'
        />
        <meta name='author' content='ahmed-m-abdelfatah' />
        <meta name='robots' content='noindex' />
        <meta name='googlebot' content='noindex' />
        <meta name='rating' content='General' />
        <meta name='revisit-after' content='30 days' />
        <meta name='classification' content='Business' />
        <meta name='distribution' content='Egypt' />
      </Head>

      <AddCareerAdmin jobList={jobList} />
      <FullScreenModel />
    </ProtectedRoute>
  );
};

export const getServerSideProps = async context => {
  const res = await axiosRequest(axiosServiceObj.getAllJobs);

  return {
    props: {
      jobList: res.data.allJobs,
    },
  };
};

export default AdminPage;
