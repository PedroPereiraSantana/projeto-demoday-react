import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../contexts/DefaultLayout.jsx";
import Inicio from "../pages/Inicio.jsx";
import Sobre from "../pages/Sobre/Sobre.jsx";
import Login from "../pages/Login/Login.jsx";
import Configuracoes from "../pages/Configuracoes/Configuracoes.jsx";
import Perfil from "../pages/Perfil/Perfil.jsx";
import Home from "../pages/HomePage/HomePage.jsx";
import Feed from "../pages/Feed/Feed.jsx";
import Ranking from "../pages/Ranking/Ranking.jsx";
import Planos from "../pages/Planos/Planos.jsx";
import Notificacoes from "../pages/Notificacao/Notificacoes.jsx";
import Galeria from "../pages/Galeria/Galeria.jsx";
import ArtesSalvas from "../pages/Galeria/ArtesSalvas.jsx";
import Recompensas from "../pages/Recompensas/Recompensa.jsx";
import Faq from "../pages/Faq/Faq.jsx";
import Torenios from "../pages/Torneios/Torneios.jsx";
import MeusTorneios from "../pages/Torneios/MeusTorneios.jsx";
import Loja from "../pages/Loja/Loja.jsx";
import DetalhesTorneio from "../pages/DetalhesTorneio/DetalhesTorneio.jsx";
// Importando as páginas necessárias para as rotas

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/configuracoes", element: <Configuracoes /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/home", element: <Home /> },
      { path: "/feed", element: <Feed /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/planos", element: <Planos /> },
      { path: "/notificacoes", element: <Notificacoes /> },
      { path: "/galeria", element: <Galeria /> },
      { path: "/artes-salvas", element: <ArtesSalvas /> },
      { path: "/recompensas", element: <Recompensas /> },
      { path: "/faq", element: <Faq /> },
      { path: "/torneios", element: <Torenios /> },
      { path: "/meus-torneios", element: <MeusTorneios /> },
      { path: "/torneios/:id", element: <DetalhesTorneio /> },
      { path: "/loja", element: <Loja /> },
    ],
  },
]);
