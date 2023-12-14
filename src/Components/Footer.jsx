import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="interface">
        <div className="line-footer">
            <div className="flex">
              <div className="logo-footer">
                <img src="" alt="" />
              </div>
              <div className="btn-social">
                      <a href="https://www.linkedin.com/in/lilian-vieira-moura/">
                        <button> <FaLinkedin /> </button></a>
                      <a href="https://api.whatsapp.com/send/?phone=5581994670688&text&type=phone_number&app_absent=0">
                        <button> <FaWhatsapp /> </button></a>
                        <a href="https://github.com/Lilianvieiramoura">
                        <button> <FaGithub /> </button></a>
              </div>
            </div>
        </div>
        <div className="line-footer borda">
          <p> <MdOutlineEmail size={30}/> <a href="mailto:contato@contato.com.br">contato@contato.com.br</a> </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;