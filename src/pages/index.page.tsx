import Head from "next/head";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

import { HomeCarousel } from "../components/HomeCarousel";
import { IconButton } from "../components/IconButton";
import { RedButton } from "../components/RedButton";

import {
  ContactContainer,
  Container,
  OurSpaceContainer,
  OurTeamContainer,
  WhoWeAreContainer,
} from "../styles/pages/homeStyle";
import { ContactUsForm } from "../components/ContactUsForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <HomeCarousel />

        <WhoWeAreContainer id="who-we-are" className="section-container">
          <div className="image-container">
            <img src="/images/who-we-are.png" alt="Image da seção quem somos" />
          </div>
          <div className="content-container">
            <div className="title-content">
              <h3>Quem somos</h3>
              <div className="line-after-title"></div>
            </div>

            <h2 className="subtitle">Lorem ipsum dolor sit amet.</h2>

            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar,
              efficitur diam ac, fringilla libero. Aenean gravida posuere ligula
              in pretium. Donec id eros non nisi vulputate dapibus. Donec eu
              malesuada dolor. Aliquam risus urna, finibus in vehicula ut,
              sollicitudin at elit.
            </p>

            <RedButton type="button">Saiba mais</RedButton>
          </div>
        </WhoWeAreContainer>

        <OurTeamContainer id="our-team" className="section-container">
          <div className="content-container">
            <div className="title-content">
              <h3>Nosso time</h3>
              <div className="line-after-title"></div>
            </div>

            <h2 className="subtitle">Lorem ipsum dolor sit amet.</h2>

            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar,
              efficitur diam ac, fringilla libero. Aenean gravida posuere ligula
              in pretium. Donec id eros non nisi vulputate dapibus. Donec eu
              malesuada dolor. Aliquam risus urna, finibus in vehicula ut,
              sollicitudin at elit.
            </p>
          </div>
          <div className="image-container">
            <img src="/images/our-team.png" alt="Image da seção quem somos" />
          </div>
        </OurTeamContainer>

        <OurSpaceContainer id="our-space" className="section-container">
          <div className="gray-card-container">
            <div className="content-container">
              <div className="title-content">
                <h3>Nosso espaço</h3>
                <div className="line-after-title"></div>
              </div>

              <h2 className="subtitle">Lorem ipsum dolor sit amet.</h2>

              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                finibus ante nec nisl volutpat aliquam. Fusce at dui pulvinar,
                efficitur diam ac, fringilla libero. Aenean gravida posuere
                ligula in pretium. Donec id eros non nisi vulputate dapibus.
                Donec eu malesuada dolor. Aliquam risus urna, finibus in
                vehicula ut, sollicitudin at elit.
              </p>
            </div>
            <div className="image-container">
              <img
                src="/images/our-space.png"
                alt="Image da seção quem somos"
              />
            </div>
          </div>
        </OurSpaceContainer>

        <ContactContainer id="contact-us" className="section-container">
          <div className="title-container">
            <h2>Fale conosco</h2>

            <p>
              Quer conversar com a Health Clinic? Basta preencher o formulário
              abaixo e nós entraremos em contato assim que possível!
            </p>

            <div className="buttons-container">
              <IconButton>
                <FaPhoneAlt size={20} />
                Telefone
              </IconButton>
              <IconButton>
                <FaWhatsapp size={20} />
                WhatsApp
              </IconButton>
              <IconButton>
                <AiFillWechat size={20} />
                WeChat
              </IconButton>
            </div>
          </div>

          <ContactUsForm />
        </ContactContainer>
      </Container>
    </>
  );
}
