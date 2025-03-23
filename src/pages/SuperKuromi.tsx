import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Markdown.css';

const markdownContent = `
# SUPER KUROMI

## Resumen
Este proyecto es un #Offtopic de un juego de plataformas en 2D, en el que el jugador controla a Kuromi en un nivel inspirado en Super Mario Bros. El objetivo es llegar al final, donde se encontrará una petición de San Valentín.

Este proyecto fue creado con el fin de tener la base de este juego, todo es modificable desde los sprites, la música, los niveles, etc.

*| Link: https://github.com/renzo-plasencia/super-kuromi*

![Image](https://github.com/user-attachments/assets/76c8a3db-3705-4177-a83e-d4ec3ee21741)
`

export default function SuperKuromi() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
