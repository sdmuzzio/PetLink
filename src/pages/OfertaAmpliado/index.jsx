import React from "react";
import { Link, useParams } from "react-router-dom";
import { BtnOfertas } from "../../components/UI/Buttons/BtnOfertas";
import { BtnPropuestas } from "../../components/UI/Buttons/BtnPropuestas";
import { BtnPrimary } from "../../components/BtnPrimary";
import { PostContainer } from "../../components/PostContainer";
import * as classes from "./OfertaAmpliado.module.css";

const home = "/icons/home.svg";
const userImage = "/icons/user.svg";

export const OfertaAmpliado = () => {
  const { id } = useParams();

  const post = {
    image: "/posts/404-location.png",
    postImage: "/posts/404-main.png",
    text: "Transito urgente para dos cachorros",
    text1: "Rescatamos a dos hermanitos de aprox. 45 días. Necesitan un hogar temporal seguro por un mes mientras gestionamos sus vacunas y adopción. Son pequeños, No ocupan mucho espacio.",
    text2: "Publicado hace: 3m",
    text3: "Alsina"
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Link to="/inicio" className={classes.homeLink}>
          <img className={classes.homeImage} alt="Home" src={home} />
        </Link>
        <BtnPropuestas />
        <BtnOfertas active />
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
        onClick={() => alert(`Contactando al usuario del post ${id}`)}
      />
    </div>
  );
};

export default OfertaAmpliado;