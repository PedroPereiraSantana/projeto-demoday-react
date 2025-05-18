
import logoClaro from '../../assets/logo-rivalix-claro.png'
import logoEscuro from '../../assets/logo-rivalix-black.png'
import './style.css'

function NavBar ({ aoClicar, larguraTela}) {

    const largura = larguraTela

    const navegacao = () =>{

    } 

    return(
        <nav className='container_header' style={{width: '100vw', height: '150px'}}>
            <div className="logo_rivalix">
                <img src={logoClaro} alt="" width='200px' />
            </div>
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
            <div className='menu_hamburger'>
                <button onClick={navegacao}>
                    <i class="ri-search-line"></i>
                </button>
                <button  onClick={aoClicar}>
                    <i class="ri-menu-line"></i>
                </button>
            </div>
        </nav>
    )
}

export default NavBar
