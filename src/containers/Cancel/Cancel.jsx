import { CancelStyles } from "./Cancel.styles";

function Cancel() {
  return (
    <CancelStyles>
      <h3>Gracias, al menos lo intentaste!</h3>
      <img
        style={{ width: 300 }}
        src="https://i.pinimg.com/originals/17/be/3b/17be3b00e9b41f69d1973ea10b3965a1.gif"
        alt="thanks"
      />
    </CancelStyles>
  );
}

export { Cancel };
