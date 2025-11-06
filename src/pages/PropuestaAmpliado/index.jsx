import React from "react";
import { Link, useParams } from "react-router-dom";
import { BtnOfertas } from "../../components/UI/Buttons/BtnOfertas";
import { BtnPropuestas } from "../../components/UI/Buttons/BtnPropuestas";
import { BtnPrimary } from "../../components/BtnPrimary";
import { PostContainer } from "../../components/PostContainer";
import * as classes from "./PropuestaAmpliado.module.css";

// ICONOS UI → MANTENIDOS (si están en public/icons/)
const home = "/icons/home.svg";
const userImage = "/icons/user.svg";

export const PropuestaAmpliado = () => {
  const { id } = useParams();

  const post = {
    image: "/posts/404-location.png",     // ← broken image
    postImage: "/posts/404-main.png",     // ← broken image
    text: "Ofrezco transito para perro pequeño",
    text1: "Tengo lugar en mi casa para un pequeño en transito. Vivo sola, tengo patio pequeño cerrado y experiencia. No puedo con gatos.",
    text2: "Publicado hace: 4m",
    text3: "Baradero"
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Link to="/inicio" className={classes.homeLink}>
          <img className={classes.homeImage} alt="Home" src={home} />
        </Link>
        <BtnPropuestas active />
        <BtnOfertas />
        <div className={classes.misChats}>Mis Chats</div>
        <img className={classes.userImage} alt="User" src={userImage} />
      </nav>

      <div className={classes.postWrapper}>
        <PostContainer
          image={post.image}
          postImage={post.postImage}
          text={post.text}
          text1={post.text1}
          text2={post.text2}
          text3={post.text3}
        />
      </div>

      <BtnPrimary
        className={classes.contactButton}
        text="Me interesa"
        onClick={() => alert(`Contactando al usuario de la propuesta ${id}`)}
      />
    </div>
  );
};

export default PropuestaAmpliado;