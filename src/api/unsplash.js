import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID vE0h-guSKuieyv6imvOm_Wlrtt2Y7MUlEj2X3aCgQqY"
    }
});