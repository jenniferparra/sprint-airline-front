import axios from 'axios';
const URL_API = 'https://ticket-back.onrender.com/flight';

export const getFlight = async (flight = {}) => {
  let urlSearch = `${URL_API}?`;
  for (const key in flight) {
    console.log(`${key}:${flight[key]}`);
    urlSearch = `${urlSearch}${key}=${flight[key]}&`;
  }
  console.log(urlSearch);
  try {
    const { data } = await axios.get(urlSearch);
    return data;
  } catch (error) {
    return [];
  }
};
  
    // try {
    //     const {data} = await axios.get(`${URL_API}/flight?itinerary.origin=${origin}&itinerary.destiny=${destiny}`)
    //     return data;
    // } catch (error) {
    //     return error
    // }
// }

// export const createUser = async (user) => {
//     try {
//         const {data} = await axios.post(`${URL_API}/flight`, user)
//         return data;
//     } catch (error) {
//         return error
//     }
// }

// export const getUsers = async () => {
//     try {
//         const {data} = await axios.get(`${URL_API}/users`)
//         return data;
//     } catch (error) {
//         return []
//     }
// }