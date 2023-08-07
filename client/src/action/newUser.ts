import axios from "axios";
import { urlAPI } from "../helper/helper";

export const registration = async (name:string, email: string, password: string) => {
    try {
        const response = await axios.post(`${urlAPI}/registration`, {
            name,
            email,
            password,
        })
        alert(response.data.message)
    } catch (error: any) {
        alert(error.response.data.message)
    }
}