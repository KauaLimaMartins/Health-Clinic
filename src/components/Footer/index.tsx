import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="top-container">
        <nav>
          <Link href="#who-we-are">Quem Somos</Link>
          <Link href="#specialities">Especialidades</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contato</Link>
        </nav>

        <div>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn size={20} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
      <div className="bottom-container">
        <p>Health Clinic São Paulo - Todos os Direitos Reservados.</p>
      </div>
    </Container>
  );
}
