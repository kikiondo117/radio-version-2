import { AppStyles } from "./App.styles";
// * Assets
import logo from "img/RADIO-1-TINTA-VERTICAL-BLANCO.svg";

function App({ children }) {
  return (
    <AppStyles>
      <img
        src={logo}
        style={{ width: "80px", position: "fixed", top: 10 }}
        alt="Logo radio chilanga"
      />
      {children}
    </AppStyles>
  );
}

export { App };
