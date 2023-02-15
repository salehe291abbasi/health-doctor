import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.post["Access-Control-Allow-Credentials"] = true;
axios.defaults.headers.get["Access-Control-Allow-Credentials"] = true;
 axios.defaults.headers.post["Content-Type"] = "application/json";

 const instance = axios.create({
    baseURL: "http://alihajiali.ir:8081",
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Credentials': true,
      "Content-Type":"application/json",
      }
  });
//   const {data} = instance.get("/user").then(function(res){
//     console.log(res.data)
//   })

// const token = localStorage.getItem("token");

// if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// axios.interceptors.response.use(null, (error) => {
//     const expectedErrors =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500;
//     if (!expectedErrors) {
//         console.log(error);
//         toast.error("مشکلی از سمت سرور رخ داده است.", {
//             position: "top-right",
//             closeOnClick: true,
//         });
//     }

//     return Promise.reject(error);
// });
// console.log("post data")
// const data1 = {username:"salehe",password:"87652516",email:"salehe@gmail.com",phone_number:"09271683629"}
// instance.post("/user",data1).then(function(res){
//     console.log(res)
// })
// instance.get("/user").then(function(res){
//     console.log(res)
// })
export default {
    get: instance.get,
    post: instance.post
};
