const request = (method) => {
    return (url, body) => {
        const optionRequests = {
            method,
        }
    }
}


export const fetchHelper = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE")
};



const headerRequest = () => {
    const user = {}
}