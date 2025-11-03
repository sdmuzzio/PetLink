import React from "react";
import { Link } from "react-router-dom";
import { BtnLink } from "./BtnLink";
import { BtnOfertas } from "./BtnOfertas";
import { BtnPropuestas } from "./BtnPropuestas";
import { BtnBack } from "./BtnBack";
import { CardMainpage } from "./CardMainpage";
import { NewPost } from "./NewPost";
import home from "./btnImg/home50.png";
import image12 from "./btnImg/image-12.png";
import backarrow from "./btnImg/backarrow.png";
import imagen20251021164242516Photoroom1 from "./imagen-2025-10-21-164242516-photoroom-1.png";
import "./style.css";
import userImage from "./user-image.png";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="bg-template">
        <div className="nav-bar">
          <img className="user-image" alt="User image" src={userImage} />

          <div className="text-wrapper-2">Mis Chats</div>

          <div className="home">
            <Link to="/inicio">
              <img className="img" alt="Home" src={home} />
            </Link>
          </div>

          <BtnPropuestas className="BTN-propuestas-instance" />
          <BtnOfertas className="BTN-ofertas-instance" />
        </div>

        <NewPost className="new-post-instance" />
      </div>

      <div className="text-wrapper-3">Bienvenido a PetLink #username!</div>

      <div className="cant-contribuido">
        <div className="rectangle" />

        <img
          className="imagen"
          alt="Imagen"
          src={imagen20251021164242516Photoroom1}
        />

        <p className="p">Esta semana has contribuido a: 4 personas</p>
      </div>

      <div className="top-donator">
        <div className="rectangle" />

        <div className="est-s-entre-los">
          Estás entre los
          <br />
          200 donadores!
        </div>

        <img className="image-2" alt="Image" src={image12} />
      </div>

      <div className="group">
        <div className="text-wrapper-4">Tienes nuevas notificaciones.</div>
      </div>

      <div className="group-2">
        <div className="rectangle-2" />

        <CardMainpage
          className="card-mainpage-instance"
          divClassName="design-component-instance-node"
          image="image.png"
          text="Transito urgente para dos cachorros"
          text1="Rescatamos a dos hermanitos de aprox. 45 días. Necesitan un hogar temporal seguro por un mes mientras gestionamos sus vacunas y adopción. Son pequeños, no ocupan mucho espacio."
          text2="Alsina"
          text3="Publicado hace: 3m"
        />
        <CardMainpage
          className="component"
          divClassName="design-component-instance-node"
          image="image-14-2.png"
          text="Ofrezco transito para perro pequeño"
          text1="Tengo lugar en mi casa para un perrito en transito. Vivo sola, tengo patio pequeño cerrado y experiencia. No puedo con gatos."
          text2="Baradero"
          text3="Publicado hace: 4m"
        />
        <div className="text-wrapper-5">Ultimas ofertas/propuestas:</div>
      </div>

      <BtnLink
        className="BTN-link-instance"
        divClassName="BTN-link-2"
        text="Hecha un vistazo."
      />
    </div>
  );
};