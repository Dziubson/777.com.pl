import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const setAuthToken = (token: string | null) => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const decodeToken = (token: string) => {
    return jwt_decode(token);
}

export const isTokenExpired = (token: string) => {
    const decoded: any = jwt_decode(token);
    return decoded.exp < Date.now() / 1000;
}
