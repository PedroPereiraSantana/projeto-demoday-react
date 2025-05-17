
import './style.css'
import 'remixicon/fonts/remixicon.css';
import logoClaro from '../../assets/logo-rivalix-claro.png'
import logoEscuro from '../../assets/logo-rivalix-black.png'
import React, {useState} from 'react';
import fotoTeste from '../../assets/Design_sem_nome_3.png'

function MenuLateral({visivel}) {

    const [escuro, setEscuro] = useState(false)

    const tema = {
        backgroundColor : escuro ? "black" : "rgb(230, 230, 230)",
        color: escuro ? "white" : "black",
        borderColor: escuro ? "white" : "black",
        
    }

    return(
        <aside style={{ display: visivel ? "flex" : "none"}}>
            <div className="fixo_cima">
                <div className="imagem_logo">
                    <img src={escuro ? logoEscuro : logoClaro} alt="A logo da Rivalix" className='logo_aside_rivalix' />
                </div>
                <div className='container_links links_Navegacao'>
                    <h2 className='titulo_aside'>Navegações</h2>
                    <ul>
                        <li><a href="#"><i class="ri-home-2-fill"></i>Início</a></li>
                        <li><a href="#"><i class="ri-sword-fill"></i>Torneios</a></li>
                        <li><a href="#"><i class="ri-sort-desc"></i>Ranking</a></li>
                        <li><a href="#"><i class="ri-team-fill"></i>Feed</a></li>
                    </ul>
                </div>
                <div className=" container_links espacos_reservados">
                    <h2 className='titulo_aside'>Espaços Reservados</h2>
                    <ul>
                        <li><a href="#"><i class="ri-shopping-bag-2-fill"></i>Loja</a></li>
                        <li><a href="#"><i class="ri-multi-image-fill"></i>Galeria</a></li>
                        <li><a href="#"><i class="ri-gift-fill"></i>Recompesas</a></li>
                        <li><a href="#"><i class="ri-notification-3-fill"></i>Notificações</a></li>
                        <li><a href="#"><i class="ri-diamond-fill"></i>Planos</a></li>
                    </ul>
                </div>
                <div className="container_links faq_ajuda">
                    <h2 className='titulo_aside'>Ajuda</h2>
                    <ul>
                        <li><a href="#"><i class="ri-chat-1-fill"></i>FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="fixo_baixo" style={tema}>
                <div className="container_perfil">
                    <div className='infos_perfil_home'>
                        <div className="container_img " >
                            <img src={fotoTeste} alt="" className="foto_usuario" />
                        </div>
                        <div className="nomes">
                            <p>nome</p>
                            <p>Nível</p>
                        </div>
                    </div>
                    <div className='config_perfil'>
                        <a href="#" >
                            <i class="ri-settings-3-fill" style={tema}></i>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default MenuLateral
