const { request } = require("http");
const { url } = require("inspector");

const urlToFetch = 'http://localhost:3000/Groupomania';

const verbsForRequests = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};


