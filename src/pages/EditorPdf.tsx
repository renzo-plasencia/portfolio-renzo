import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Markdown.css';

const markdownContent = `
# EDITOR DE PDF BÁSICO
Este proyecto lo realicé para poder aplicar lo que he autoaprendido en Python. Si tienes algun comentario, mejora o sugerencia coméntalo. Cualquier comentario constructivo será bien recibido.

*Link:* https://github.com/renzo-plasencia/convert_pdf/blob/main/PDF_Convert_V1.py

## Librerías necesarias:
* pdf2image
* PIL
* pypdf

## ¿Cómo ejecuto el script?
* Necesitas tener instaladas las librerías mencionadas anteriormente. Además, el poppler y pegar su path en la variable "poppler_path".


![Image](https://github.com/user-attachments/assets/a23dd40a-d37b-4fb6-8b09-6b32e2874b91)

* ¡Ejecútalo!, no debería existir ningún error.

> Te dejo más información sobre el **poppler path**: https://github.com/oschwartz10612/poppler-windows/releases

## Ejemplo de Uso: Necesitas convertir un PDF de varias páginas a varias imágenes
1. Tener la ruta de tu archivo:
> En este caso es: "D:\Python\Scripts v1\Programa PDF\Prueba_PDF" y el nombre del archivo "PDF v1"

2. Ejecutar el script:

![Image](https://github.com/user-attachments/assets/898d5aab-5b39-47cb-9bc9-4ed9d40f1697)

3. Navegar por el menú:
   
![Image](https://github.com/user-attachments/assets/cc18dbe6-d7bd-45ba-bd66-aa31528482e2)

4. ¡Listo!
   
![Image](https://github.com/user-attachments/assets/58b4006f-e830-47c4-8836-c2e0fa9cd04e)
`

export default function EditorPdf() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
