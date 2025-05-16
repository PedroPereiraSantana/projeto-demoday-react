
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Test from '../pages/Test'
import Home from '../pages/Home'

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

export default Rout
