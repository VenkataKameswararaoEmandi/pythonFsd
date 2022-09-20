import axios from "axios";

export default function MakeRequest(url) {
    return {
        get: async () => {
            try {
                let result = await axios.get(url);
                return result.data;
            } catch (error) {
                console.log(error);
            }
        },
    };
}