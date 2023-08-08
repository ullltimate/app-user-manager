import axios from "axios";
import { urlAPI } from "../helper/helper";
import { logOut } from "./newUser";
import { getUsers } from "./getUsers";

export const deleteUsers = async (navigate: any, ) => {
    try {
        const response = await axios.delete(`${urlAPI}/users`);
        logOut(navigate);
        alert(response.data.message)
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}

export const deleteUser = async (id: any) => {
    try {
        const response = await axios.delete(`${urlAPI}/users/${id}`);
        console.log(response.data.message)
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}

export const removeUsers = async (selectedId: string[], paramsId: string|undefined, setCheckboxes: any, navigate: any, setUsers: any, setLoader: any) => {
    selectedId.map(async(id) => {await deleteUser(id), await getUsers(setUsers, setLoader);});
    if (paramsId) selectedId.includes(paramsId) ? logOut(navigate) : setCheckboxes([]);
}