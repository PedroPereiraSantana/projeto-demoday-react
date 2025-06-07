
import imagePerfil from '../../assets/exemple-icon.jpg'
import './style.css'

export default function UserCard() {
    return(
        <div className="user-card">
            <div className="container-img-user-card">
                <img src={imagePerfil} alt="" className='user-avatar'/>
            </div>
            <div className="user-card-header">
                <h3 className="user-name">Nome do Usuário</h3>
            </div>
            <div className="user-card-pontos">
                <p className="user-score">Pontuação: 12345</p>
            </div>
        </div>

    )
}
