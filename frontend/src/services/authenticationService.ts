// authenticationService.ts
import axios, { AxiosResponse } from 'axios';
import { User } from '../types';

const baseURL = 'http://localhost:3001/users'; // Assuming users is the resource for users data

const authenticationService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (email: string, password: string): Promise<User> => {
    const response: AxiosResponse<User[]> = await authenticationService.get(`?email=${email}`);
    const user = response.data[0]; // Get the first user that matches the email

    if (!user) {
        throw new Error('No such user found');
    }

    // Perform password check here. Since this is a mock API,
    // we'll just check if password is 'password'
    if (password !== 'password') {
        throw new Error('Incorrect password');
    }

    // If everything is okay, return the user data
    return user;
};

export const registerUser = async (user: User): Promise<User> => {
    const response: AxiosResponse<User> = await authenticationService.post('/', user);
    return response.data;
};
