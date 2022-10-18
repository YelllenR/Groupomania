
const urlToFetch = 'http://localhost:3000/Groupomania';
const urlPostSignup = 'http://localhost:3000/Groupomania/create-account';
const urlPostLogin = 'http://localhost:3000/Groupomania/login';

const verbsForRequests = {
    get: ('GET'),
    post: ('POST'),
    put: ('PUT'),
    delete: ('DELETE')
};

export default {
    urlToFetch, 
    urlPostSignup, 
    urlPostLogin, 
    verbsForRequests
}
