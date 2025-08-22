import { useState } from "react";
import "../styles/pa-correos.css";

export default function PACorreos() {
  const [animateArrows, setAnimateArrows] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const start = () => {
    setAnimateArrows(false);
    setIsSpinning(false);
    setTimeout(() => {
      setAnimateArrows(true);
      setIsSpinning(true);
    }, 300);
  };

  return (
    <section className={`fd-pa-section-table`}>
      <div className="fd-pa-out">
        <table className="fd-pa-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <svg className={`arrow arrow1 ${animateArrows ? "animate" : ""}`} viewBox="0 0 120 60">
                  <path d="M 0 50 L 100 10" markerEnd="url(#arrowhead)" />
                </svg>
                </td>
                <td>
                  <div className="badge-container">
                    <img className="outlook-logo" src="src/assets/ms-outlook.png" alt="Outlook Logo" />
                    <span className="badge">1</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img className={`${isSpinning ? "spin" : ""}`} src="src/assets/microsoft-power-apps-2020.png" alt="Power Apps Logo" />
                </td>
                <td>
                  <svg className={`arrow arrow1 ${animateArrows ? "animate" : ""}`} viewBox="0 0 120 20">
                  <path d="M 0 10 H 100" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#ffffffff" />
                    </marker>
                  </defs>
                </svg>
                </td>
                <td>
                  <div className="badge-container">
                    <img className="outlook-logo" src="src/assets/ms-outlook.png" alt="Outlook Logo" />
                    <span className="badge">1</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td><button className="fd-pa-button" onClick={start}>
                    Notificar
                  </button></td>
                <td>
                 <svg className={`arrow arrow1 ${animateArrows ? "animate" : ""}`} viewBox="0 0 120 60">
                  <path d="M 0 10 L 100 50" markerEnd="url(#arrowhead)" />
                </svg>
                </td>
                <td>
                  <div className="badge-container">
                  <img className="outlook-logo" src="src/assets/ms-outlook.png" alt="Outlook Logo" />
                    <span className="badge">1</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </div>

      
    </section>
  );
}
