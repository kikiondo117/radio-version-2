import styled from "@emotion/styled";
import bgImg from "../img/bg2.jpg";
import bgMobile from "../img/bg-mobile.jpg";

export const AppStyles = styled.div(() => ({
  height: "100vh",
  background: `url(${bgMobile})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  "@media screen and (min-width: 800px)": {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
