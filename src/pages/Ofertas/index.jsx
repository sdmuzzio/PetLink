import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BtnOfertas } from "../../components/UI/Buttons/BtnOfertas";
import { BtnPropuestas } from "../../components/UI/Buttons/BtnPropuestas";
import { CardsList } from "../../components/CardsList";
import * as classes from "./Ofertas.module.css";

const home = "/icons/home.svg";
const newPost = "/icons/plus.svg";
const userImage = "/icons/user.svg";

export const Ofertas = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.ofertas}>
      <nav className={classes.navBar}>
        <div className={classes.homeWrapper}>
          <Link to="/inicio">
            <img className={classes.home} alt="Home" src={home} />
          </Link>
        </div>

        <BtnPropuestas onClick={() => navigate("/propuestas")} />
        <BtnOfertas onClick={() => navigate("/ofertas")} />

        <div className={classes.misChats}>Mis Chats</div>
        <img className={classes.userImage} alt="User" src={userImage} />
      </nav>

      <img
        className={classes.newPost}
        alt="New post"
        src={newPost}
        onClick={() => navigate("/nuevo-post")}
      />

      <div className={classes.cards_list_instance}>
        <CardsList
          cardsImage="/posts/404-1.png"
          cardsImage1="/posts/404-2.png"
          cardsImage2="/posts/404-3.png"
          cardsImage3="/posts/404-4.png"
          cardsImg="/posts/404-5.png"
          cardsPostImage="/posts/post-404-1.png"
          cardsPostImage1="/posts/post-404-2.png"
          cardsPostImage2="/posts/post-404-3.png"
          cardsText="Publicado hace: 6m"
          cardsText1="Dono bolsa de alimento"
          cardsText10="Portela"
          cardsText11="Tengo auto y disponibilidad los sabados por la mañana..."
          cardsText12="Publicado hace: 15m"
          cardsText13="Dono accesorios de gato"
          cardsText14="Campana"
          cardsText15="Hice limpieza y tengo dos collares..."
          cardsText2="Baradero"
          cardsText3="Compré una bolsa de 20kg..."
          cardsText4="Publicado hace: 9m"
          cardsText5="Dono rascador y cama"
          cardsText6="Zárate"
          cardsText7="Mis gatos ya no usan el rascador..."
          cardsText8="Publicado hace: 10m"
          cardsText9="Ofrezco traslado"
        />
      </div>
    </div>
  );
};

export default Ofertas;