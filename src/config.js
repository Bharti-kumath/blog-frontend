import axios from "axios"

export const axiosInstance   =axios.create({
    baseURL : "https://beyond-the-blog-api.onrender.com/"
})