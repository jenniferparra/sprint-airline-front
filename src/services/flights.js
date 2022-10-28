import axios from 'axios';
const URL_API = 'https://ticket-back.onrender.com';

export const getFlight = async (origin, destiny) => {
    try {
        const {data} = await axios.get(`${URL_API}/flight?origin=${origin}&destiny=${destiny}`)
        return data;
    } catch (error) {
        return error
    }
}

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