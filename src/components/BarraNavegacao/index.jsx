
import './style.css'

function NavBar () {
    return(
        <div className='container_header'>
            <search>
                <input type="text" placeholder='Pesquisar...' />
            </search>
            <div className='container_icons'>
                <div>
                    <a href="#">
                        <i class="ri-gift-fill"></i>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <i class="ri-coins-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
