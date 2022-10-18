import *as fetchHelper from './fetch'

function BuildPostRequest() {
    const headerForm = new Headers();
    headerForm.append('content-type', 'application/json');

    const postRequest = new Request(fetchHelper.urlPostSignup, {
        headers: headerForm,
        method: fetchHelper.verbsForRequests.post,
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

function PostSignup() {
    const bodyRequest = BuildPostRequest();

    fetch(bodyRequest)
        .then(response => response.json())
        .then((data) => GetFormDataSignup(data))
}

export default { PostSignup, GetFormDataSignup }

