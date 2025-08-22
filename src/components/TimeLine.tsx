import { useState } from "react";
import "../styles/time-line.css";

export default function TimeLine() {

    const [isActive, setIsActive] = useState(false);
    const [isActiveUno, setIsActiveUno] = useState(false);
    const [isActiveDos, setIsActiveDos] = useState(false);
    const [isActiveTres, setIsActiveTres] = useState(false);
    const [isActiveEnd, setIsActiveEnd] = useState(false);

    const start = () => {
      setIsActive(false);
      setIsActiveUno(false);
      setIsActiveDos(false);
      setIsActiveTres(false);
      setIsActiveEnd(false);

      setTimeout(() => {
        setIsActive(true);            // volver a poner clase → animación reinicia
      }, 50);

      setTimeout(() => {
        setIsActiveUno(true);         // segunda animación más tarde
      }, 600);

      setTimeout(() => {
        setIsActiveDos(true);         // tercera animación más tarde
      }, 1200);

      setTimeout(() => {
        setIsActiveTres(true);         // cuarta animación más tarde
      }, 1800);

      setTimeout(() => {
        setIsActiveEnd(true);         // cuarta animación más tarde
      }, 2400);
    };

  return (
    <section className={`fd-tl-section-table`}>
      <div className="fd-tl-out">
        <button className="fd-tl-button" onClick={start}>
          Iniciar Flujo
        </button>
        <table className="fd-tl-table">
            <thead>
              <tr>
                <th>Inicio</th>
                <th>Estación 1</th>
                <th>Estación 2</th>
                <th>Estación 3</th>
                <th>Fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>

                <td><div className={`circle-start ${isActive ? "active" : ""}`}></div></td>
                <td><div className={`circle-process ${isActiveUno ? "uno" : ""}`}></div></td>
                <td><div className={`circle-process ${isActiveDos ? "dos" : ""}`}></div></td>
                <td><div className={`circle-process ${isActiveTres ? "tres" : ""}`}></div></td>
                <td><div className={`circle-process ${isActiveEnd ? "end" : ""}`}></div></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
      </div>

      
    </section>
  );
}
