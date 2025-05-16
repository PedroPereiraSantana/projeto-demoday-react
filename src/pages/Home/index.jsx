
import './style.css'
import MenuLateral from '../../components/MenuLateral'
import BarraNavegacao from '../../components/BarraNavegacao'

function Home() {
    return (
        <div style={{ display: 'flex' }}>
            <div className='section_aside'>
                <MenuLateral />
            </div>
            <div className='section_search'>
                <BarraNavegacao />
            </div>
        </div>
    );
}
export default Home
