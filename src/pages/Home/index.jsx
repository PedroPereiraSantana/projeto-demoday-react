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
        <CardTorneio />
      </main>
    </>
  );
}
