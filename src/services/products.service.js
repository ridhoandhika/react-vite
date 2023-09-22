import axios from "axios";

export const getProduct = async (callback) => {
    try {

        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response.data);
        callback(response.data)
        // if(response.status === 200) return response.data
        // return []
    } catch (error) {
        console.error(error);
        return []
    }
}