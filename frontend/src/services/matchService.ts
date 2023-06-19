// matchService.ts
import { create, getAll, getById, update, remove } from './apiService';
import { Match } from '../types';

export const createMatch = async (matchData: Match) => {
    const response = await create('matches', matchData);
    return response as Match;
};

export const getAllMatches = async () => {
    const response = await getAll('matches');
    return response as Match[];
};

export const getMatch = async (id: string) => {
    const response = await getById('matches', id);
    return response as Match;
};

export const updateMatch = async (id: string, matchData: Match) => {
    const response = await update('matches', id, matchData);
    return response as Match;
};

export const deleteMatch = async (id: string) => {
    const response = await remove('matches', id);
    return response;
};
