import img from '../assets/imgLing.jpg'
import { IoIosCode } from "react-icons/io";

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
    </main>
  )
}

export default Main;