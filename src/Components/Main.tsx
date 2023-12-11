import React from 'react';
import img from '../assets/imgLing.jpg'

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
    </main>
  )
}

export default Main;