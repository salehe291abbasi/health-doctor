import {
    getUser ,
    getUsers,
    deleteUser ,
    updateUser ,
    newUser,
} from "./../services/userService";
import { successMessage } from "./../utils/message";

export const getAllUsers = () => {
    return async (dispatch) => {
        const { data } = await getUsers();
        await dispatch({ type: "INIT", payload: data.users });
    };
};

export const createNewUser = (user) => {
    return async (dispatch, getState) => {
        const { data, status } = await newUser(user);
        if (status === 201) successMessage("کاربر با موفقیت ثبت نام شد");
        await dispatch({
            type: "ADD_USER",
            payload: [...getState().users, data.user],
        });
    };
};

export const handleUserUppdate = (user , code  ,newuser) => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const filteredUsers = users.filter(
            (user1) => user1.id !== user.id
        );
        // const updatedCourses = [...courses];
        // const courseIndex = updatedCourses.findIndex(
        //     (course) => course._id == courseId
        // );

        // let course = updatedCourses[courseIndex];

        // course = { ...Object.fromEntries(updatedCourse) };
        // updatedCourses[courseIndex] = course;

        try {
            const { data, status } = await updateUser(
                user,
                code,
                newuser
            );
            console.log(data);
            await dispatch({
                type: "UPDATE_USER",
                payload: [...filteredUsers, data.user],
            });
            if (status === 200) {
                successMessage("کاربر با موفقیت ویرایش شد");
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_USER", payload: [...users] });
        }
    };
};

export const handleUserDelete = (username,code) => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const filteredusers = users.filter(
            (user1) =>  user1.username!== username
        );

        try {
            await dispatch({
                type: "DELETE_USER",
                payload: [...filteredusers],
            });
            const { status } = await deleteUser(username , code);

            if (status === 200) successMessage("کاربر با موفقیت پاک شد ");
        } catch (ex) {
            await dispatch({ type: "DELETE_USER", payload: [...users] });
        }
    };
};
