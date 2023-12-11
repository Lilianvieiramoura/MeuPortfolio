function Header() {
  return (
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
              <li><a href="#">Especialidades</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Projetos</a></li>
            </ul>
        </nav>
        <div className="btn-contato">
            <a href="#">
              <button>Contato</button>
            </a>
        </div>
      </div>
    </header>
  )
}

export default Header;