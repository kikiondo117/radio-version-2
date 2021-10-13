import { CompletedStyles } from "./Completed.styles";

function Completed() {
  return (
    <CompletedStyles>
      <h3>¡Muchas gracias por tu donación!</h3>

      <img
        style={{ width: 300 }}
        src="https://media2.giphy.com/media/PicjZqqOmdNPUGf6HI/giphy.gif"
        alt="thanks"
      />
    </CompletedStyles>
  );
}

export { Completed };
