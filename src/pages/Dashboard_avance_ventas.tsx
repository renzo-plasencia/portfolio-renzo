import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Markdown.css';


const markdownContent = `
# Dashboard Avance en Ventas

## **¿Qué se hizo?** 
Se creo un dashboard usando Power Bi buscando conocer el avance en las ventas/colocaciones del producto Depósito a Plazo Fijo. Se muestra indicadores importantes para la gestión e historial de conversiones vs leads repartidos en diferentes cortes de tiempo.
## **¿Cuál fue el reto?**
Esta empresa necesitaba tener un dashboard con indicadores importantes para su gestión: ratio de conversión (leads convertidos/leads totales) y ratio de monto (monto total recaudado/monto meta). Con esta información el negocio sería capaz de tomar nuevas acciones, brindar feedback inmediato, crear nuestras estrategias y proponer nuevas formas de comunicar el producto. Toda el dataset se alojaba en un sharepoint en la nube y se debía de conectar con el dashboard para obtener rápidamente actualizaciones periódicas.
## **Preview**
### Vista 1

![Frame 2](https://github.com/renzo-plasencia/dashboard-ventas-avance/assets/148007927/fc928647-63f4-4e5c-a03d-262fd70878c9)

Descripción: En esta primera vista se conoce el avance por asesor en forma de ranking frente a una meta trazada. Así mismo, se observa el detalle para cada uno de ellos: leads totales gestionados, leads convertidos, % de conversión leads, monto en soles, monto en proporción frente al monto meta.

### Vista 2
![Frame 4](https://github.com/renzo-plasencia/dashboard-ventas-avance/assets/148007927/4ec97531-4f9d-47e8-9e08-1230cc6d81fd)

Descripción: Esta segunda vista nos muestra más a detalle como está compuesto la gestión de leads totales de cada asesor. Aquí es importante resaltar que al conocer la calidad de los leads se pueden tomar acciones como filtrar mucho más la base o intentar conocer las razones de porque no contestan.

### Vista 3
![Frame 5](https://github.com/renzo-plasencia/dashboard-ventas-avance/assets/148007927/9bd29c41-f92e-413a-91d9-03557284f0e0)

Descripción: Esta pantalla es el histórico detallado por corte (cada 3 días) de los leads convertidos frente a los leads entregados.

> _*Nombres, datos sensibles y números han sido modificados por políticas de privacidad_
`

export default function AutomatizacionMacroVba() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
