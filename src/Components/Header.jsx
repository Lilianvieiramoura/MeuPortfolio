import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsList } from "react-icons/bs";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <header>
      <div className="interface">
        <div className="logo">
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
        <nav className="menu-desktop">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Habilidades</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Projetos</a></li>
            </ul>
        </nav>
        <div className="btn-contato">
            <a href="#">
              <button>Contato</button>
            </a>
        </div>
        
        <div className="btn-abrir-menu" id="btn-menu" onClick={handleMenuToggle}>
          <BsList color="pink" size={30}/>
        </div>
        <div className={`menu-mobile ${isMenuOpen ? 'abrir-menu' : ''}`} id="menu-mobile">
            <div className="btn-fechar" onClick={closeMenu}>
              <TiDeleteOutline color='pink' size={30}/>
        </div>
        <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Habilidades</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Projetos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
        </nav>
        </div>
        <div className={`overlay-menu ${isMenuOpen ? 'overlay-visible' : ''}`}  id="overlay-menu"></div>
      </div>
    </header>
    </>
  )
}

export default Header;