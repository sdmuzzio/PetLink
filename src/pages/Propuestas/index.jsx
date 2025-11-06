import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BtnOfertas } from "../../components/UI/Buttons/BtnOfertas";
import { BtnPropuestas } from "../../components/UI/Buttons/BtnPropuestas";
import { CardsList } from "../../components/CardsList";
import * as classes from "./Propuestas.module.css";

const home = "/icons/home.svg";
const newPost = "/icons/plus.svg";
const userImage = "/icons/user.svg";

export const Propuestas = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Link to="/inicio" className={classes.homeWrapper}>
          <img className={classes.home} alt="Home" src={home} />
        </Link>
        <BtnPropuestas active />
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

      <div className={classes.cardsWrapper}>
        <CardsList
          cardsImage="/posts/404-1.png"
          cardsImage1="/posts/404-2.png"
          cardsImage2="/posts/404-3.png"
          cardsImg="/posts/404-4.png"
          cardsPostImage="/posts/post-404-1.png"
          cardsPostImage1="/posts/post-404-2.png"
          cardsPostImage2="/posts/post-404-3.png"
          cardsPostImage3="/posts/post-404-4.png"
          cardsText="Publicado hace: 4m"
          cardsText1="Tengo 5 perros rescatados en casa y me estoy quedando sin alimento balanceado..."
          cardsText10="Portela"
          cardsText11="Insumos para caballo"
          cardsText12="Publicado hace: 9m"
          cardsText13="Encontramos un galgo con una fractura..."
          cardsText14="Campana"
          cardsText15="Medicamento para galgo"
          cardsText2="Baradero"
          cardsText3="Necesidad de alimentos"
          cardsText4="Necesito cucha"
          cardsText5="Adopté a un perro adulto..."
          cardsText6="Publicado hace: 5m"
          cardsText7="Zárate"
          cardsText8="Publicado hace: 7m"
          cardsText9="Rescatamos un caballo..."
        />
      </div>
    </div>
  );
};

export default Propuestas;