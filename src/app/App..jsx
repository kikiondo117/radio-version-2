import { Helmet } from "react-helmet";
import { AppStyles } from "./App.styles";
// * Assets
import logo from "img/RADIO-1-TINTA-VERTICAL-BLANCO.svg";

function App({ children }) {
  return (
    <AppStyles>
      <Helmet>
        <meta property="og:title" content="Radio chilanga" />
        <meta
          property="og:description"
          content="Musica Méxicana, clasicas y nuevas."
        />
        <meta property="og:image" content={logo} />
      </Helmet>
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
