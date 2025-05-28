import './style.css'
import fotoTorneio from "../../assets/foto-torneio.png"

export default function CardTorneio() {
    return(
        <div className="container_card_perfil">
            <img src={fotoTorneio} alt="" />
            <h2>Nome Do Torneio</h2>
            <p>Localização</p>
            <div className="categorias">
                <p>categoria 1</p>
                <p>categoria 2</p>
                <p>categoria 3</p>
            </div>
            <p>vagas restantes: 10</p>
            <div className="barra_de_conclusao">
                <div className='barra_de_conclusao_interna'>
                </div>
            </div>
            <p>descrição breve do torneio</p>
        </div>
    )
}
