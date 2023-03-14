import { IResult } from "../types/interfaces";

export const getDarkMode=():boolean=>{
    let darkMode=localStorage.getItem("darkMode")??"false";
    return JSON.parse(darkMode);
}
export const getResults=():IResult[]=>{
    let results=localStorage.getItem("results")??"[]";
    return JSON.parse(results) as IResult[];
}