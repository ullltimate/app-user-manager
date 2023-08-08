import axios from "axios";
import { urlAPI } from "../helper/helper";

export const registration = async (name:string, email: string, password: string, setMessage: any) => {
    try {
        const response = await axios.post(`${urlAPI}/registration`, {
            name,
            email,
            password,
        })
        setMessage(response.data.message)
    } catch (error: any) {
        setMessage(error.response.data.message)
    }
}

export const login = async (email: string, password: string, setMessage: any) => {
    try {
        const response = await axios.post(`${urlAPI}/login`, {
            email,
            password,
        })
        sessionStorage.setItem('tokenUser', response.data.token);
        sessionStorage.setItem('userId', response.data.user.id);
    } catch (error: any) {
        setMessage(error.response.data.message)
    }
}

export function logOut(callback:any){
    sessionStorage.removeItem('tokenUser');
    sessionStorage.removeItem('userId');
    callback('/signIn')
}

export async function singIn(email:string, password: string, callback: any, setMessage: any){
    await login(email, password, setMessage);
    if(sessionStorage.getItem('tokenUser')){
      callback(`/user/${sessionStorage.getItem('userId')}`)
    }
}