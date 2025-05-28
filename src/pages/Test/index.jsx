import NavBar from "../../components/NavBar"
import './style.css'
import { ThemeProvider, useTheme } from '../../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';

function Test() {
    const {toggleTheme} = useTheme();

    return(
        <>
        <header>
            <NavBar/>
        </header>
        <main>
            <Link to="/home">
                <button>maneiro</button>
            </Link>
            <button onClick={toggleTheme} >Mudar Tema</button>
            <div className="container_teste">heheh</div>
        </main>
        </>
    )
}

export default function App(){
    return(
        <ThemeProvider>
            <Test/>
        </ThemeProvider>
    )
}


