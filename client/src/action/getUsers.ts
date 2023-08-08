import axios from "axios";
import { urlAPI } from "../helper/helper";

export const getUsers = async (setUsers: any, setLoader: any) => {
    try {
        setLoader(true)
        const response = await axios.get(`${urlAPI}/users`);
        setUsers(response.data);
    } catch (error: any) {
        console.log(error.response.data.message)
    } finally {
        setLoader(false)
    }
}