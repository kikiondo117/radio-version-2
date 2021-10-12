import { Helmet } from "react-helmet";
import { AppStyles } from "./App.styles";
// * Assets
import logo from "img/RADIO-1-TINTA-VERTICAL-BLANCO.svg";
import { PlayerMobile } from "components/PlayerMobile/PlayerMobile";
import useWindowSize from "hooks/useWindowSize";
import { Header } from "components/Header/Header";
import { useLocation } from "react-router-dom";

function App({ children }) {
  const { width } = useWindowSize();
  const location = useLocation();

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
      <Header />
      {children}
      {width < 800 && <PlayerMobile />}
      {location.pathname !== "/" ? <PlayerMobile /> : null}
    </AppStyles>
  );
}

export { App };
