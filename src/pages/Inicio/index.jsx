import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardMainpage } from "../../components/CardMainpage";
import home from "../../assets/images/btnImg/home.png";
import dogImage from "../../assets/images/imagen_2025-10-21_164242516-Photoroom 1.png";
import catImage from "../../assets/images/image-12.png";
import styles from "./Inicio.module.css";

export const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <nav className={styles.navBar}>
        <Link to="/inicio" className={styles.home}>
          <img src={home} alt="Home" />
        </Link>
        <button
          className={styles.btnPropuestasInstance}
          onClick={() => navigate("/propuestas")}
        >
          Propuestas
        </button>
        <button
          className={styles.btnOfertasInstance}
          onClick={() => navigate("/ofertas")}
        >
          Ofertas
        </button>
        <div className={styles.textWrapper2}>Mis Chats</div>
      </nav>

      {/* BOTÓN + */}
      <button
        className={styles.newPostButton}
        onClick={() => navigate("/nuevo-post")}
      >
        +
      </button>

      {/* BIENVENIDO */}
      <h1 className={styles.textWrapper3}>Bienvenido a PetLink #username!</h1>

      {/* LAYOUT */}
      <div className={styles.mainLayout}>
        <div className={styles.postsColumn}>
          <h2 className={styles.textWrapper5}>Últimas ofertas/propuestas:</h2>

          {/* UN SOLO CARDMAINPAGE → 2 CARDS (oferta + propuesta) */}
          <div className={styles.cardsGrid}>
            <CardMainpage
              oferta={{
                image: "image.png",
                text: "Transito urgente para dos cachorros",
                text1:
                  "Rescatamos a dos hermanitos de aprox. 45 días. Necesitan un hogar temporal seguro por un mes mientras gestionamos sus vacunas y adopción. Son pequeños, no ocupan mucho espacio.",
                text2: "Alsina",
                text3: "Publicado hace: 3m",
                postId: "1",
              }}
              propuesta={{
                image: "image-14-2.png",
                text: "Ofrezco transito para perro pequeño",
                text1:
                  "Tengo lugar en mi casa para un perrito en transito. Vivo sola, tengo patio pequeño cerrado y experiencia. No puedo con gatos.",
                text2: "Baradero",
                text3: "Publicado hace: 4m",
                postId: "2",
              }}
            />
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className={styles.statsColumn}>
          <div className={styles.cantContribuido}>
            <img className={styles.imagen} alt="Perro" src={dogImage} />
            <p>Esta semana has contribuido a: 4 personas</p>
          </div>
          <div className={styles.topDonator}>
            <img className={styles.image2} alt="Gato" src={catImage} />
            <div className={styles.estSEntreLos}>
              Estás entre los
              <br />
              200 donadores!
            </div>
          </div>
        </div>
      </div>

      {/* NOTIFICACIONES */}
      <div className={styles.notifications}>
        <span
          className={styles.textWrapper4}
          onClick={() => navigate("/notificaciones")}
        >
          Tienes nuevas notificaciones. Hecha un vistazo.
        </span>
      </div>
    </div>
  );
};

export default Inicio;