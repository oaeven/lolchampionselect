import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'content-type':'application/json',
        Accept: 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcGVyc3NvbiIsInJvbGVzIjoiU1RBTkRBUkRfVVNFUixTVVBFUl9VU0VSIiwiZXhwIjoxNTkyOTE1MDI3fQ.kkCk8Dzz-134cmFYv1zbw6pgdkVqeGNAuxXv8LyJ0u0'
    },
});

// axiosInstance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// Add a response interceptor
AxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log(`Request to ${response.config.url} successfully returned ${response.status}`)

    return response.data;
    
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log(`Request to ${error.url} returned error ${error.status}`)

    return Promise.reject(error);
  });

export default AxiosInstance;

