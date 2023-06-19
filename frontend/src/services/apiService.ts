// apiService.ts
import axios from 'axios';
import { Match, Bet, Prediction, User } from '../types';

const baseURL = 'http://localhost:3001';

const apiService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAll = async (resource: string) => {
    const response = await apiService.get(`/${resource}`);
    return response.data as Match[] | Bet[] | Prediction[] | User[];
};

export const getById = async (resource: string, id: string) => {
    const response = await apiService.get(`/${resource}/${id}`);
    return response.data as Match | Bet | Prediction | User;
};

export const create = async (resource: string, data: Match | Bet | Prediction | User) => {
    const response = await apiService.post(`/${resource}`, data);
    return response.data as Match | Bet | Prediction | User;
};

export const update = async (resource: string, id: string, data: Match | Bet | Prediction | User) => {
    const response = await apiService.put(`/${resource}/${id}`, data);
    return response.data as Match | Bet | Prediction | User;
};

export const remove = async (resource: string, id: string) => {
    const response = await apiService.delete(`/${resource}/${id}`);
    return response.data;
};

export default apiService;
