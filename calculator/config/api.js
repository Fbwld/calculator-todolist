import axios from "axios";

const API = axios.create({
    baseURL:"https://api.kontenbase.com/query/api/v1/b4f11547-632f-4c19-afc5-5b5181bfbe07"
})

export default API;