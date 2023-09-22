import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
        callback(true, res.data)
    })
    .catch((error) => {
        callback(false, error)
    })
    //  {
    //     method:'POST',
    //         body:JSON.stringify({
    //             username: "mor_2314",
    //             password: "83r5^_"
    //         })
    // })
}

export const getUsername = (token) => {
    const decoded = jwtDecode(token)
    return decoded
}