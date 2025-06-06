import CardTorneio from "../../components/CardTorneio";
import NavBar from "../../components/NavBar";
import fotoFliperama from "../../assets/fliperama_home.png";
import "./style.css";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="section_um_home">
          <div className="container_carrossel_home">
            <div className="container_infos_carrossel_home">
              <h2>
                Participe da Comunidade<br></br>RIVALIX no Discord
              </h2>
              <button>Entrar Agora</button>
            </div>
            <img className="imagem_fliperama_home" src={fotoFliperama} alt="" />
          </div>
          <div className="container_ranking_home">
            <div className="descricao_ranking_home">
              <h2>Ranking</h2>
              <p>Cada posição aqui carrega história, não estatística.</p>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
}
