import img from '../assets/imgLing.jpg'
import img2 from '../assets/imgLilian.jpg';

import { IoIosCode } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Main() {
  return(
    <main>
      <section className="topo-site">
        <div className="interface">
          <div className="flex">
            <div className="txt-topo-site">
                <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis animi doloribus impedit consectetur veniam officia qui ratione repellat aut consequuntur ipsam pariatur enim possimus quam, reiciendis obcaecati minus voluptates.</p>

                <div className="btn-contato">
                  <a href="#">
                    <button>Entre em contato</button>
                  </a>
                </div>
            </div>
            <div className="img-topo-site">
                <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="especialidades">
        <div className="interface">
              <h2 className="titulo">MINHAS <span>ESPECIALIDADES.</span></h2>
            <div className="flex">
                <div className="especialidades-box">
                <IoIosCode size={70} color='pink' />
                  <h3>Website</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vitae, commodi iusto recusandae cumque porro earum explicabo libero, deleniti sint ullam temporibus sed quos obcaecati tenetur quis ab nam sequi.</p>
                </div>
                <div className="especialidades-box">
                <IoIosCode size={70} color='pink' />
                  <h3>Website</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vitae, commodi iusto recusandae cumque porro earum explicabo libero, deleniti sint ullam temporibus sed quos obcaecati tenetur quis ab nam sequi.</p>
                </div>
                <div className="especialidades-box">
                <IoIosCode size={70} color='pink' />
                  <h3>Website</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vitae, commodi iusto recusandae cumque porro earum explicabo libero, deleniti sint ullam temporibus sed quos obcaecati tenetur quis ab nam sequi.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="sobre">
        <div className="interface">
          <div className="flex">
            <div className="img-sobre">
              <img src={img2} alt="" />
            </div>
            <div className="txt-sobre">
                <h2>MUITO PRAZER, <span>SOU LÍLIAN VIEIRA.</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eveniet hic delectus eligendi possimus rem dolorem eum debitis sequi tempore. Odit provident placeat ratione ipsa quasi. Ut odio illo tenetur?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid iusto minus impedit quod voluptatum, nam natus optio atque dolore possimus quidem deserunt itaque, commodi dolor adipisci nostrum fugiat nemo.</p>
                <div className="btn-social">
                    <a href="https://www.linkedin.com/in/lilian-vieira-moura/">
                      <button> <FaLinkedin /> </button></a>
                    <a href="https://api.whatsapp.com/send/?phone=5581994670688&text&type=phone_number&app_absent=0">
                      <button> <FaWhatsapp /> </button></a>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="interface">
        <h2 className="titulo">MEU <span>PORTFÓLIO.</span></h2>
          <div className="flex">
            <div className="img-portfolio" id='img1'>
              <div className="overlay">Projeto 1</div>
            </div>
            <div className="img-portfolio" id='img2'>
            <div className="overlay">Projeto 2</div>
            </div>
            <div className="img-portfolio" id='img3'>
            <div className="overlay">Projeto 3</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;