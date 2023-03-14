import { createContext, useContext } from "react";
import { IResult } from "../types/interfaces";

interface IContextValues {
    insertResult: (result: IResult) => void,
    clearResult: () => void,
    darkMode: boolean,
    darkModeHandler: () => void,
    results: IResult[]
}

const AppContext = createContext<IContextValues>({
    insertResult: () => { },
    clearResult: () => { },
    darkMode: false,
    darkModeHandler: () => { },
    results: []

})


const useInternalAppContext = () => useContext(AppContext)

export default AppContext;