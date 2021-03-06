import { API } from '../../backend';

//Todo: return a object of particular userid with information
export const userinfo = (userId) => {
    
    return fetch(`${API}user/${userId}/`, {
        method: 'GET',
    })
    .then((response) => {
        return response.json()
    })
    .catch((err) => console.log(err));
};