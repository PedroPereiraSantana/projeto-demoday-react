
import './style.css'

export default function UserCard() {
    return(
        <div className="user-card">
            <div className="user-card-header">
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="user-avatar" />
                <h3 className="user-name">Nome do Usuário</h3>
            </div>
            <div className="user-card-body">
                <p className="user-score">Pontuação: 12345</p>
                <p className="user-rank">Ranking: 1</p>
            </div>
        </div>

    )
}
