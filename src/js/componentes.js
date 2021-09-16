import "../css/componentes.css";
import nicologo from "../assets/img/img.jpg";

export const saludar = (nombre) => {
  console.log("crea etiqueta");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre}`;

  document.body.append(h1);

  //img
  console.log(nicologo);
  const img = document.createElement("img");
  img.src = nicologo;
  document.body.append(img);
};
