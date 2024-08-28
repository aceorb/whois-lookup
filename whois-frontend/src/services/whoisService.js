import axios from 'axios';

const API_URL = 'http://localhost:3000/api/domain';

export const fetchWhoisData = async (domain, type) => {
    try {
        const response = await axios.get(`${API_URL}?domain=${domain}&type=${type}`);
        const {data} = response;
        if (data.success) {
            return data;
        }
        else {
            console.error('Error fetching Whois data:', data.message);
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching Whois data:', error);
        throw error;
    }
};