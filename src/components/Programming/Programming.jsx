import React from "react";
import moment from "moment";
// * Styles
import {
  ProgrammingStyles,
  ProgrammingVariants,
  ProgrammingVariantsMobile,
} from "./Programming.styles";
// * Assets
import * as programming from "assets/programacion";
// * Componentsd and hooks
import useWindowSize from "../../hooks/useWindowSize";

function Programming() {
  const { width } = useWindowSize();
  const [day] = React.useState(() => {
    const currentDay = moment().day();
    const dia = programming.days[currentDay];
    return dia;
  });

  return (
    <ProgrammingStyles
      variants={width > 500 ? ProgrammingVariants : ProgrammingVariantsMobile}
      initial="hidden"
      animate="visible"
    >
      <div className="Title-container">
        <h3 className="Title">Programación del día</h3>
      </div>

      {programming.Schedule.map((scheduleByLocutor) => {
        return (
          <div key={scheduleByLocutor.locutor}>
            {scheduleByLocutor.locutor} 🎤👨🏻‍💼
            <div>
              {scheduleByLocutor[day].map((programming) => {
                return (
                  <ul key={programming.programa}>
                    <li className="Programa-titulo">{programming.programa}</li>
                    <li className="Programa-horario">{programming.hora}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </ProgrammingStyles>
  );
}

export { Programming };
