
import './style.css'
import MenuLateral from '../../components/MenuLateral'
import NavBar from '../../components/BarraNavegacao'

function Home() {

  return (
    <main>
      <div className="nav">
        <NavBar/>
      </div>
      <div className="container_corpo">
        <div className="sideBar">
          <MenuLateral/>
        </div>
        <div className="sideBar">
          <MenuLateral/>
        </div>
        <div className="container_sections">
          <section className="container_primario">
            <div className="cartaz_discord">

            </div>
            <div className="ranking_home">

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default Home
