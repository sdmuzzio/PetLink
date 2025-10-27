import React from "react";
import { BtnPrimary } from "../../components/BtnPrimary";
import { BtnSecondary } from "../../components/BtnSecondary";
import image10 from "../../assets/images/image-10.png";
import image11 from "../../assets/images/image-11.png";
import * as classes from "./landing.module.css";

export const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <div className={classes.backgroundShape} />

      <img className={classes.image10} alt="Image" src={image10} />

      <img className={classes.image11} alt="Image" src={image11} />

      <div className={classes.contentContainer}>
        <p className={classes.mainHeading}>
          Donde cada gesto de ayuda encuentra su conexión
        </p>

        <p className={classes.subHeading}>
          Somos la comunidad 100% dedicada a mascotas. Publica tu necesidad u
          ofrece ayuda (transporte, donaciones, refugio) y conecta con otros.
          Aquí tu publicación se ve
        </p>

          <BtnPrimary
          className={classes.btnPrimary}
          divClassName={classes.btnPrimaryText}
          propiedad1="predeterminado"
          text="Explorar publicaciones"
        />
      </div>

      <div className={classes.header}>
        <div className={classes.headerBackground} />

        <BtnSecondary
          className={classes.btnSecondary}
          divClassName={classes.btnSecondaryText}
          propiedad1="predeterminado"
          text="Iniciar Sesión"
        />
        <div className={classes.logo}>PetLink</div>
      </div>
    </div>
  );
};