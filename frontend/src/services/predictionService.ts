import axios from 'axios';

class PredictionService {
    baseURL = 'http://localhost:3001/predictions'; // Using json-server as mock API

    // Get all predictions
    async getAllPredictions() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Get a specific prediction by ID
    async getPredictionById(id: string) {
        try {
            const response = await axios.get(`${this.baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Add a new prediction
    async addPrediction(prediction: any) { // Replace 'any' with your Prediction type
        try {
            const response = await axios.post(this.baseURL, prediction);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Update a prediction
    async updatePrediction(id: string, updatedPrediction: any) { // Replace 'any' with your Prediction type
        try {
            const response = await axios.put(`${this.baseURL}/${id}`, updatedPrediction);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Delete a prediction
    async deletePrediction(id: string) {
        try {
            const response = await axios.delete(`${this.baseURL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new PredictionService();
