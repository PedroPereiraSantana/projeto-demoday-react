import "./style.css";
import logoClaro from "../../assets/logo-rivalix-claro.png";
import logoEscuro from "../../assets/logo-rivalix-black.png"
import iconUser from "../../assets/icon-teste-2.png";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";

export default function NavBar() {
  // essa constante armazena o valor atual de largura da tela
  const [width, setWidth] = useState(window.innerWidth);

  const [visivel, setVisivel] = useState(width > 1024);

  const [displaySearch, setDisplaySearch] = useState(width > 1024);

  const { theme } = useTheme();

  // esse useEffect atualiza o tamanho da variavel width que armazena o tamanho da tela
  useEffect(() => {
    const handleRisize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleRisize);

    return () => window.removeEventListener("resize", handleRisize);
  }, []);

  function searchVisivel() {
    if (width < 1024) {
      setDisplaySearch(!displaySearch);
    }
  }

  function asideVisivel() {
    if (width < 1024) {
      setVisivel(!visivel);
    }
  }

  return (
    <header>
      <nav className="container_header">
        <div className="logo_rivalix">
          <img key={theme} src={theme === 'dark' ? logoEscuro : logoClaro}alt="" width="200px" />
        </div>
        <div
          className={`search  ${width > 1024 || displaySearch ? "visivel" : "escondido"}`}
        >
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="container_icons">
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
        <div className="menu_hamburger">
          <button onClick={searchVisivel}>
            <i class="ri-search-line"></i>
          </button>
          <button onClick={asideVisivel}>
            <i class="ri-menu-line"></i>
          </button>
        </div>
      </nav>

      <aside style={{ display: width > 1024 || visivel ? "flex" : "none" }}>
        <div className="fixo_cima">
          <div className="container_links links_Navegacao">
            <h2 className="titulo_aside">Navegações</h2>
            <ul>
              <li>
                <a href="#">
                  <i class="ri-home-2-fill"></i>Início
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-sword-fill"></i>Torneios
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-sort-desc"></i>Ranking
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-team-fill"></i>Feed
                </a>
              </li>
            </ul>
          </div>
          <div className=" container_links espacos_reservados">
            <h2 className="titulo_aside">Espaços Reservados</h2>
            <ul>
              <li>
                <a href="#">
                  <i class="ri-shopping-bag-2-fill"></i>Loja
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-multi-image-fill"></i>Galeria
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-gift-fill"></i>Recompesas
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-notification-3-fill"></i>Notificações
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-diamond-fill"></i>Planos
                </a>
              </li>
            </ul>
          </div>
          <div className="container_links faq_ajuda">
            <h2 className="titulo_aside">Ajuda</h2>
            <ul>
              <li>
                <a href="#">
                  <i class="ri-chat-1-fill"></i>FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixo_baixo">
          <div className="container_perfil">
            <div className="infos_perfil_home">
              <div className="container_img ">
                <img src={iconUser} alt="" className="foto_usuario" />
              </div>
              <div className="nomes">
                <p>nome</p>
                <p>Nível</p>
              </div>
            </div>
            <div className="config_perfil">
              <a href="#">
                <i class="ri-settings-3-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <section className="nav2">
        <ul>
          <li>
            <a href="#">
              <i class="ri-home-2-fill"></i>Início
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-sword-fill"></i>Torneios
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-sort-desc"></i>Ranking
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-team-fill"></i>Feed
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-user-3-fill"></i>Perfil
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
