"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Column } from "../Column";
import { LogoMark } from "../Navbar/navbar";
import { Row } from "../Row";
import IconButton from "../Button/iconButon";

export const FooterBar = () => {
  return (
    <div>
      <Row className="bg-zinc-900 text-white text-center p-4 gap-4">
        <LogoMark />
        <FootBar />
        <SocialMedia />
      </Row>
    </div>
  );
};

export const FootBar = () => {
  return (
    <div>
      <Column className="text-start p-4 w-full text-white text-sm font-extralight">
        <p>ENDEREÇO: Rua Mato Grosso, 1492, Paranavaí, Paraná</p>
        <p>TELEFONE: (44) 99805-3428</p>
      </Column>
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <div>
      <Row>
        <IconButton
          icon={<FaInstagram className="size-7" />}
          color={""}
          onClick={() => {
            console.log("Instagram");
          }}
        />
        <IconButton
          icon={<FaFacebook className="size-7" />}
          color={""}
          onClick={() => {
            console.log("Facebook");
          }}
        />
        <IconButton
          icon={<FaLinkedin className="size-7" />}
          color={""}
          onClick={() => {
            console.log("Linkedin");
          }}
        />
        <IconButton
          icon={<FaWhatsapp className="size-7" />}
          color={""}
          onClick={() => {
            console.log("WhatsApp");
          }}
        />
      </Row>
    </div>
  );
};
