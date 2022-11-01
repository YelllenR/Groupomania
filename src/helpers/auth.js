import axios from 'axios'


export default function GetAuthorization(auth) {
    const auth = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
    axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;


}