import axios from "axios";
import { getCookie } from "../api/cookie";

const api = axios.create({
  //baseurl에는 반복되는 url을 넣어준다.
    baseURL: "http://3.34.242.12:8085/",
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
    withCredentials: true,
});

export default api;