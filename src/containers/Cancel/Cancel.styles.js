import styled from "@emotion/styled";

export const CancelStyles = styled.div(({ theme }) => ({
  background: "rgba(0,0,0,.5)",
  color: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 120,
  height: "100%",
  fontWeight: 600,
}));
