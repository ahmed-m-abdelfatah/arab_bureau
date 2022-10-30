import { useRouter } from 'next/router.js';
import Navbar from './CommonComponents/Navbar.js';
import Footer from './CommonComponents/Footer.js';
import FullScreenModelProvider from '../context/FullScreenModelContext.js';
import AuthContextProvider from '../context/AuthContext.js';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isAdmin = currentPath.includes('/admin');

  return (
    <>
      {!isAdmin && <Navbar currentPath={currentPath} />}
      <main>
        <AuthContextProvider>
          <FullScreenModelProvider>{children}</FullScreenModelProvider>
        </AuthContextProvider>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
};

export default Layout;
