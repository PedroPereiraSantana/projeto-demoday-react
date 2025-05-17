import React, { useState, useEffect  } from "react";
import './style.css'
import MenuLateral from '../../components/MenuLateral'
import NavBar from '../../components/BarraNavegacao'

function Home() {
    const [visivel, setVisivel] = useState(false);
    const [largura, setLargura] = useState(window.innerWidth);

  // Atualiza largura ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Força visibilidade verdadeira se a tela for grande
  const deveMostrar = largura >= 1024 || visivel;

  const alternarVisibilidade = () => {
    // Só alterna se for menor que 1050px
    if (largura < 1025) {
      setVisivel((v) => !v);
    }
  };

    return (
        <main style={{ display: 'flex' }}>
            <MenuLateral visivel={deveMostrar}  />
            <NavBar aoClicar={alternarVisibilidade} visivel={visivel} />
        </main>
    );
}
export default Home
