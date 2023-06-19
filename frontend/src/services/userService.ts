// userService.ts
import { create, getById, update, remove } from './apiService';
import { User } from '../types';

export const register = async (userData: User) => {
    const response = await create('users', userData);
    return response;
};

export const login = async (userData: User) => {
    const response = await create('auth/login', userData);
    return response;
};

export const getUser = async (id: string) => {
    const response = await getById('users', id);
    return response;
};

export const updateUser = async (id: string, userData: User) => {
    const response = await update('users', id, userData);
    return response;
};

export const deleteUser = async (id: string) => {
    const response = await remove('users', id);
    return response;
};
