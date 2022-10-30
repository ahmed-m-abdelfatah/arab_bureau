import { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modelData, setModelData] = useState({
    title: '',
    description: '',
    responsibilities: '',
    requirements: '',
    salaryRange: '',
  });

  const closeModel = () => setShow(false);
  const openModel = () => setShow(true);
  const toggleModel = () => setShow(prev => !prev);

  const exposed = {
    show,
    closeModel,
    openModel,
    toggleModel,
    modelData,
    setModelData,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useFullScreenModel = () => useContext(Context);

export default Provider;
