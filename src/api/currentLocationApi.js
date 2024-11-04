
import axios from "axios";

export const getCurrentLocation = async () => {
    const url = 'http://ip-api.com/json'
    try {
        const res = await axios.get(url)
        return res.data;  
    } catch (error) {
        console.error("Error fetching location data:", error);
    }

};
