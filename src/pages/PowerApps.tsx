import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import FlowDemo from '../components/FlowDemo';
import TimeLine from '../components/TimeLine';
import PACorreos from '../components/PA_Correos';
import '../styles/Markdown.css';

const markdownContent = `
# Power Apps + Power Automate: Creación de Aplicación Low Code 🖥️

Las soluciones low code son las preferidas por las **empresas que buscan agilidad y eficiencia en el desarrollo de aplicaciones**. Además, permite probar ideas o conceptos de forma rápida y escalable con aplicaciones de bajo código. En este proyecto busqué crear una **solución que permitía cargar información de forma automática** desde **Power Automate** y pasarlo al entorno de **Power Apps** para que sea gestionado.

> **Disclaimer:** Debido a políticas de privacidad no puedo colocar detalles o foto del proyecto. Sin embargo, he extraído los puntos principales.

## Objetivo:
- El objetivo principal de esta aplicación es cargar información con Power Automate de forma automática desde un correo Outlook y pasarlo al entorno de Power Apps donde sería gestionado.
- En Power Apps, se crearían formularios y vistas para mostrar y gestionar la información cargada.
- Se crearían estaciones manejadas por diferentes equipos donde se podría trackear los tiempos y estados para un futuro análisis.

## Características:
- Integración de Power Automate con Outlook para la carga automática de datos.
- La información debería ser **delegable** porque se contaba con cargas masivas de más de 1000 registros mensuales.
- Se implementó paginación para mejorar la experiencia del usuario al gestionar grandes volúmenes de datos.
- Se implementó un sistema de alertas con Power Automate a través de correos electrónicos.

## Proceso:
**1. Se implementó un flujo de trabajo en Power Automate que se activa al recibir un correo electrónico en Outlook.**

El correo electrónico contiene diferentes datos que son procesadas y limpiados en Power Automate. Toda esta información se hace de forma automática y se envía a Power Apps para su gestión.
`

const markdownContent3 = `
**2. Se carga a una estación inicial, pero pasa por diferentes estaciones donde interactúa con diferentes stake holders.**

La información se muestra para su gestión y pasa por diferentes stakeholders que añaden comentarios o información dependiendo de su rol.
`

const markdownContent4 = `
**3. Se configuraron alertas en Power Automate para notificar a los usuarios en diferentes estados.**
`

const markdownContent5 = `
Gracias a este proyecto desarrollé y mejoré mis habilidades con aplicaciones low code y flujos en el ambiente de Microsoft. Además, fue un gran reto el trabajar con una **fuente de datos (Outlook) diferente a las usuales (Excel)** y aprender a integrarla en un flujo de trabajo automatizado.

## Aprendizajes:

1. Conocimiento intermedio para crear aplicaciones low-code/no-code con **Power Automate y Power Apps.**
2. Uso de **delegación en Power Apps** para mejorar el rendimiento en la gestión de datos.
3. Creación de **alertas automáticas** desde Power Apps hacia correos personalizados.
4. Implementación de **paginación** en Power Apps para mejorar la experiencia del usuario al gestionar grandes volúmenes de datos.
5. Aprendizaje de la integración de **fuentes de datos no convencionales** como Outlook en flujos de trabajo automatizados.
`

const markdownContent6 = `
> Presiona el botón para simular cómo funciona el flujo de carga desde **Outlook a Power Apps**. Este flujo activa un **Power Automate** cuando llega un correo electrónico.
`

const markdownContent7 =
`> **Inicia el flujo** para simular como los datos pasan de una estación a otra.`

export default function PowerApps() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      <FlowDemo />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent6}</ReactMarkdown>
      <br></br>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent3}</ReactMarkdown>
      <TimeLine />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent7}</ReactMarkdown>
      <br></br>


      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent4}</ReactMarkdown>
      <PACorreos />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent5}</ReactMarkdown>
    </div>
  )
}
