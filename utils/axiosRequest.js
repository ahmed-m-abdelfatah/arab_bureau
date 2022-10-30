import axios from 'axios';

async function axiosRequest(serviceObject) {
  // console.log('serviceObject', serviceObject);
  try {
    const res = await axios(serviceObject);
    return res;
  } catch (err) {
    // console.error('~ Something went wrong: ', err);
    return err;
  }
}

export default axiosRequest;
