

import axios from 'axios';


const API_URL='https://rawg-video-games-database.p.rapidapi.com/';
const API_KEY='02eb3b808fmsh2bd2df67b501486p12766cjsne020a44fb8cf';
const options = {
  method: 'GET',
  url: API_URL ,
  headers: {
    'X-RapidAPI-Key':API_KEY ,
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

export const fetchData=async (url)=>{
    try {
      console.log("fetchdata ran")
     const {data}= await axios.get(`${API_URL}/${url}`,options)
     return data
    } catch (error) {
        console.error(error);
    }
  }