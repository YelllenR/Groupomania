import { createApp } from 'vue'
// import './style.css'

import './scss/style.css'
import App from './App.vue'

// importing router from the router file
import router from './router'

import { createPinia } from 'pinia'

const pinia = createPinia();

const urlPostSignup = 'http://localhost:3000/Groupomania/create-account';

function BuildPostRequest() {
    const headerForm = new Headers();
    headerForm.append('content-type', 'application/json');

    const postRequest = new Request(urlPostSignup, {
        headers: headerForm,
        method: 'POST',
        body: JSON.stringify()
    });

    console.log(postRequest);
    return postRequest;
};

function GetFormDataSignup() {
    const signupData = new FormData();

    const userSignup = {};

    for (let dataField in signupData.keys()) {
        userSignup[dataField] = signupData.get(dataField)
    }
    console.log(userSignup);
    return userSignup;
};

function fetchApi() {
    const buildRequest = BuildPostRequest();
    fetch(buildRequest)
        .then((response) => response.json())
        .then((dataSignup) => GetFormDataSignup(dataSignup))
}

// Creating the App imported, using router to navigate and mount
createApp(App)
    .use(router)
    .use(pinia)
    .use(fetchApi())
    .mount('#app');


