import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll/modules";

import { Container } from "./styles";
import { MobileMenu } from "../MobileMenu";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {menuIsOpen && (
        <MobileMenu handleCloseMenu={() => setMenuIsOpen(false)} />
      )}

      <Container>
        <nav>
          <Link
            to="who-we-are"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Quem Somos
          </Link>
          <Link
            to="our-team"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Especialidades
          </Link>
          <Link
            to="our-space"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Blog
          </Link>
          <Link
            to="contact-us"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Contato
          </Link>

          <FiSearch size={20} />
        </nav>

        <RiMenu3Fill onClick={() => setMenuIsOpen(true)} size={26} />
      </Container>
    </>
  );
}
