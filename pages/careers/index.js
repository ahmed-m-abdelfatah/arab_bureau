import Head from 'next/head.js';
import Culture from '../../components/CareersPageSections/Culture.js';
import Process from '../../components/CareersPageSections/Process.js';
import OpenPositions from '../../components/CareersPageSections/OpenPositions.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import FullScreenModel from '../../components/FormsAndModals/FullScreenModel.js';
import { useFullScreenModel } from '../../context/FullScreenModelContext.js';
import { useEffect } from 'react';

export default function Careers(props) {
  const { closeModel } = useFullScreenModel();

  useEffect(() => {
    return () => {
      closeModel();
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title data-i18n='arabBureau'>Arab Bureau - Careers</title>
        <meta
          name='keywords'
          content='Arab Bureau for Design and Engineering Consultations Design., egypt, Engineering , Consultations , production , egypt, loading'
        />
        <meta name='author' content='ahmed-m-abdelfatah' />
        <meta name='robots' content='ALL' />
        <meta name='rating' content='General' />
        <meta name='revisit-after' content='30 days' />
        <meta name='classification' content='Business' />
        <meta name='distribution' content='Egypt' />
      </Head>

      <Culture />
      <Process />
      <OpenPositions jobList={props.jobList} />
      <FullScreenModel />
    </>
  );
}

export const getServerSideProps = async context => {
  const res = await axiosRequest(axiosServiceObj.getAllJobs);

  return {
    props: {
      jobList: res.data.allJobs,
    },
  };
};
