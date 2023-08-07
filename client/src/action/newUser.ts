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

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${urlAPI}/login`, {
            email,
            password,
        })
        localStorage.setItem('tokenUser', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
    } catch (error: any) {
        alert(error.response.data.message)
    }
}

export function logOut(callback:any){
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('userId');
    callback('/signIn')
}

export async function singIn(email:string, password: string, callback: any){
    await login(email, password);
    if(localStorage.getItem('tokenUser')){
      callback(`/user/${localStorage.getItem('userId')}`)
    }
}