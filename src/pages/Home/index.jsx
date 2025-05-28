import CardTorneio from "../../components/CardTorneio";
import NavBar from "../../components/NavBar";
import "./style.css";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="container_cards_home">
          <CardTorneio />
          <CardTorneio />
          <CardTorneio />
        </div>
      </main>
    </>
  );
}
