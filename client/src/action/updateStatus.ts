import axios from "axios";
import { urlAPI } from "../helper/helper";
import { logOut } from "./newUser";
import { getUsers } from "./getUsers";

export const updateUsers = async (status: string, navigate: any, setUsers: any, setLoader: any, setCheckboxes: any, setAll: any) => {
    try {
        const response = await axios.put(`${urlAPI}/users`, {
            status
        });
        if(status === 'block'){
            logOut(navigate);
        } else {
            await getUsers(setUsers, setLoader);
            setCheckboxes([]);
            setAll(false)
        }
        console.log(response.data.message)
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}

export const updateUser = async (id: any, status: string) => {
    try {
        const response = await axios.put(`${urlAPI}/users/${id}`, {
            status
        });
        console.log(response.data.message)
    } catch (error: any) {
        console.log(error.response.data.message)
    }
}

export const updateStatus = async (status: string, selectedId: string[], paramsId: string|undefined, setCheckboxes: any, navigate: any, setUsers: any, setLoader: any) => {
    selectedId.map(async(id) => {await updateUser(id, status), await getUsers(setUsers, setLoader);});
    if (paramsId){
        if(status === 'block'){
            selectedId.includes(paramsId) ? logOut(navigate) : setCheckboxes([]);
        } else {
            setCheckboxes([])
        }
    }
}