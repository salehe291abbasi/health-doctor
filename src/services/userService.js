import http from "./httpServices";
import config from "./config.json";



export const getUsers = () => {
    return http.get(`${config.baseurl}/user`);
};

export const getUser = (userId) => {
    return http.get(`${config.baseurl}/api/course/${userId}`);
};
export const newUser = (user) => {
    return http.post(`${config.baseurl}/user`, user);
};

export const deleteUser = (username , code) => {
    return http.get(`${config.baseurl}/delete_user?username=${username}&code=${code}`);
};

export const updateUser = (username , code , newusername) => {
    return http.get(`${config.baseurl}/update_user?username=${username}&code=${code}&new_username=${newusername}`);
};

export const getCode = (username) => {
    return http.post(`${config.baseurl}/active_phone_numver`, username);
};

export const activeUsername = (username , code) => {
    return http.get(`${config.baseurl}/active_phone_numver?username=${username}&code=${code}`);
};