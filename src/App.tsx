import Calculator from "./components/Calculator"
import Container from "./components/Container"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Wrapper from "./components/Wrapper"

const App = () => {
  return (
    <Wrapper >
      <Header />

      <div className=" flex-auto flex ">
        <SideBar />
        <Container >
        <Calculator/>
        </Container>
      </div>
    </Wrapper>

  )
}

export default App