// const request = (method, url) => {

// }

import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => 
    request.post(`${baseUrl}/login`, { email, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        // localStorage.clear()
        //response.status === 204 ??
            return response;
        
    } catch (error) {
        console.log(error);
    }
};

export const register = (name, email, password) =>
    request.post(`${baseUrl}/register`, {name, email, password});