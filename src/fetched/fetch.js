import axios from 'axios';

const API_URL = 'https://api.rawg.io/api';
const API_KEY = '4b1b7e5f62fa40589d611638a5b6cc6a';

const params = {
  key: API_KEY,
  // You can add more parameters here, like ordering, filtering, etc.
};

export const fetchData = async (url) => {
  try {
    console.log("fetchData ran");
    const { data } = await axios.get(`${API_URL}/${url}`, {
      params: params,  // Corrected parameter placement
    });
   return data
  } catch (error) {
    console.log(error);
  }
};
