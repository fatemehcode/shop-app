import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const ID=1;
const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products/${ID}`);
    return (response.data);
}

export {getProduct};