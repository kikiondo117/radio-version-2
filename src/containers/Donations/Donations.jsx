import React from "react";
import { DonationsStyles } from "./Donations.styles";

function Donations() {
  return (
    <DonationsStyles pt={100} pl={[50, 100]} pr={[50, 100]}>
      <h2 className="Title">Sé un patrocinador</h2>

      <p className="Text">
        Radio Chilanga es un espacio que permite ser parte de la comunidad de
        radio escuchas, conectar con publico de varias edades para llebar a tu
        negocio o evento a otro nivel. Es una gran oportunidad de trabajar en
        conjunto con tu empresa, contamos con distintos niveles de patrocinios
        para dar valor a tu marca. Conoce la información aquí.
      </p>

      <p className="Text">¡Contáctanos! - </p>

      <div className="Brands">
        <h3 className="Title">Patrocinadores</h3>
      </div>
    </DonationsStyles>
  );
}

export { Donations };
