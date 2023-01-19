import { Link } from "react-scroll/modules";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { Container } from "./styles";

interface MobileMenuProps {
  handleCloseMenu: () => void;
}

export function MobileMenu({ handleCloseMenu }: MobileMenuProps) {
  return (
    <Container>
      <IoMdClose onClick={handleCloseMenu} size={32} />

      <nav>
        <Link
          to="who-we-are"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          onClick={handleCloseMenu}
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
          onClick={handleCloseMenu}
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
          onClick={handleCloseMenu}
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
          onClick={handleCloseMenu}
        >
          Contato
        </Link>

        <FiSearch size={20} />
      </nav>
    </Container>
  );
}
