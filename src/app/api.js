import axios from "axios";

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyA8x2f7e-aQ4pgfh7fsM0RQYxbPimItcaA",
            },            
})

export default request