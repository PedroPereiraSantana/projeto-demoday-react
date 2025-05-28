
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './AppRouter.css'
import Test from '../pages/Test'
import Home from '../pages/Home'
import { ThemeProvider } from '../context/ThemeContext'

function Rout() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Test/>}/>
                <Route path='/home' element= {<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default function App(){
    return(
        <ThemeProvider>
            <Rout/>
        </ThemeProvider>
    )
}
