// betService.ts
import { create, getAll, getById, update, remove } from './apiService';
import { Bet } from '../types';

export const createBet = async (betData: Bet) => {
    const response = await create('bets', betData);
    return response as Bet;
};

export const getAllBets = async () => {
    const response = await getAll('bets');
    return response as Bet[];
};

export const getBet = async (id: string) => {
    const response = await getById('bets', id);
    return response as Bet;
};

export const updateBet = async (id: string, betData: Bet) => {
    const response = await update('bets', id, betData);
    return response as Bet;
};

export const deleteBet = async (id: string) => {
    const response = await remove('bets', id);
    return response;
};
