import NavBar from "../../components/BarraNavegacao"
import MenuLateral from "../../components/MenuLateral"
import './style.css'

function Test() {
    return(
        <main style={{ display: 'flex'}}>
            <MenuLateral/>
            <NavBar/>
        </main>
    )
}

export default Test
