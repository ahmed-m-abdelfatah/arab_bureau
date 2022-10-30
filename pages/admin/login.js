import Head from 'next/head.js';
import LoginForm from '../../components/FormsAndModals/LoginForm.js';
import ProtectedRoute from '../../components/ProtectedRoute.js';

const LoginPage = () => {
  return (
    <ProtectedRoute>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title data-i18n='arabBureau'>Arab Bureau - Login</title>
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

      <LoginForm />
    </ProtectedRoute>
  );
};

export default LoginPage;
