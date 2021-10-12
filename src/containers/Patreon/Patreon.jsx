import React from "react";
import { Title } from "shared/components/Title/Title";
import { PatronStyles } from "./Patreon.styles";
// * Animations
import { left_to_right2 } from "animations/left_to_right";

function Patreon() {
  return (
    <PatronStyles pt={130} pl={[50, 100]} pr={[50, 100]}>
      <Title
        className="Title"
        variants={left_to_right2}
        initial="start"
        animate="animate"
      >
        Sé un patrocinador
      </Title>

      <p className="Text">
        Radio Chilanga es un espacio que permite ser parte de la comunidad de
        radio escuchas, conectar con publico de varias edades para llebar a tu
        negocio o evento a otro nivel. Es una gran oportunidad de trabajar en
        conjunto con tu empresa, contamos con distintos niveles de patrocinios
        para dar valor a tu marca. Conoce la información aquí.
      </p>

      <p
        style={{
          color: "white",
          background: "black",
          display: "inline-block",
          width: "fit-content",
        }}
      >
        ¡Contáctanos! - 3121838986{" "}
      </p>

      <div className="Brands">
        <Title
          className="Title"
          variants={left_to_right2}
          initial="start"
          animate="animate"
        >
          Patrocinadores
        </Title>

        <p
          style={{
            color: "white",
            background: "black",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          Proximamente
        </p>
      </div>
    </PatronStyles>
  );
}

export { Patreon };
