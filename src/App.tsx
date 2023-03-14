import { useEffect, useState } from "react"
import Calculator from "./components/Calculator"
import Container from "./components/Container"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Wrapper from "./components/Wrapper"
import AppContext from "./context/AppContext"
import { IResult } from "./types/interfaces"
import { getDarkMode, getResults } from "./utils/localStorage"


const App = () => {
  const [results, setResults] = useState<Array<IResult>>(getResults)
  const [darkMode, setDarkMode] = useState<boolean>(getDarkMode)
  const insertResult = (result: IResult) => {
    setResults((preveState) => [...preveState, result]);
    localStorage.setItem("results", JSON.stringify([...results, result]))
  }

  const clearResult = () => {
    setResults([])
    localStorage.setItem("results", JSON.stringify([]))
  }
  const darkModeHandler = () => {
    setDarkMode(d => !d);
    localStorage.setItem("darkMode", (!darkMode).toString())
  }
  return (
    <Wrapper isDark={darkMode}>
      <AppContext.Provider value={{
        insertResult,
        clearResult,
        darkMode,
        darkModeHandler,
        results
      }}>
        <Header />

        <div className=" flex-auto flex dark:text-white dark:bg-slate-900">
          <SideBar />
          <Container >
            <Calculator />
          </Container>
        </div>
      </AppContext.Provider>
    </Wrapper>

  )
}

export default App