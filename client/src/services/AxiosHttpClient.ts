import axios from 'axios'

const AxiosHttpClient = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/',
    headers: {
        'content-type':'application/json',
        Accept: 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcGVyc3NvbiIsInJvbGVzIjoiU1RBTkRBUkRfVVNFUixTVVBFUl9VU0VSIiwiZXhwIjoxNTkyOTE1MDI3fQ.kkCk8Dzz-134cmFYv1zbw6pgdkVqeGNAuxXv8LyJ0u0'
    },
});

// Add a response interceptor
AxiosHttpClient.interceptors.response.use(function (response) {
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

export default AxiosHttpClient;

