import { useState, useRef } from "react";
import "../styles/flow-demo.css";
import paIcon from "../assets/power-automate-icon.png";

export default function FlowDemo() {
  const [form, setForm] = useState({
    nombre: "Renzo Plasencia",
    doc: "25698415",
    encargado: "Juan Perez",
  });
  const [texto, setTexto] = useState<string>("");
  const [running, setRunning] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const nombreRef = useRef<HTMLInputElement>(null);
  const docRef = useRef<HTMLInputElement>(null);
  const encargadoRef = useRef<HTMLInputElement>(null);

  const reemplazar = () => {
    setTexto("Subiendo información...");
  }

  const start = () => {
    if (running) return;
    
    reemplazar();
    setShowTable(false);
    setRunning(true);

    const nuevo = {
    nombre: nombreRef.current?.value || form.nombre,
    doc: docRef.current?.value || form.doc,
    encargado: encargadoRef.current?.value || form.encargado,
  };
  
  setForm(nuevo);

    setTimeout(() => {
      setShowTable(true);
      setRunning(false);
    }, 3000);
  };

  return (
    <section className={`fd-wrap ${running ? "fd-run" : ""}`}>
      {/* Columna 1: inputs */}
      <div className="fd-col fd-inputs">
        <label>
          <span>NOMBRE</span>
          <input name="nombre" placeholder={form.nombre} ref={nombreRef} />
        </label>
        <label>
          <span>DNI/RUC</span>
          <input name="doc" placeholder={form.doc} ref={docRef} />
        </label>
        <label>
          <span>ENCARGADO</span>
          <input name="encargado" placeholder={form.encargado} ref={encargadoRef} />
        </label>
        <button onClick={start} disabled={running}>
          {running ? "Procesando…" : "Subir datos"}
        </button>
      </div>

      {/* Columna 2: icono y flechas */}
      <div className="fd-col fd-center">
        <img className="fd-icon" src={paIcon} alt="Power Automate" />
        <svg className="fd-arrows" viewBox="0 0 360 220">
          <path className="fd-arrow fd-a1" d="M10 40 C140 20 200 40 260 80" />
          <path className="fd-arrow fd-a2" d="M10 110 C140 110 200 110 260 110" />
          <path className="fd-arrow fd-a3" d="M10 180 C140 200 200 180 260 140" />
          <defs>
            <marker id="fd-head" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0, 7 3.5, 0 7" fill="#ffffffff"/>
            </marker>
          </defs>

        </svg>
      </div>

      {/* Columna 3: tabla de salida */}
      <div className="fd-col fd-out">
        {showTable ? (
          <table className="fd-table">
            <thead>
              <tr><th>Nombre</th><th>DNI/RUC</th><th>Encargado</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>{form.nombre}</td>
                <td>{form.doc}</td>
                <td>{form.encargado}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="fd-placeholder">{texto}</div>
        )}
      </div>
    </section>
  );
}
