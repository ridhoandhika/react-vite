import axios from "axios";

export const getProducts = async (callback) => {
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

export const getDetailProduct = async (id, callback) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(response.data);
        callback(true, response.data)
        // if(response.status === 200) return response.data
        // return []
    } catch (error) {
        console.error(error);
        callback(false, error)
    }
}

