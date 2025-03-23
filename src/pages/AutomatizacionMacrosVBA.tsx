import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import '../styles/Markdown.css';

const markdownContent = `
# Automatización con Macros en VBA

## **¿Qué se hizo?**
Este proyecto creo una automatización inicial y básica con macros en lenguaje VBA de Excel...

## **Programación VBA**
> Preparar Balancines: Entrada y salida de dinero general de la empresa.
\`\`\`vba
Sub Balancin_DPF_CTS()
  Application.DisplayAlerts = False
  Sheets("Balancin Dpf").Delete
  Sheets("Balancin DPF - Sin fines").Delete
  Sheets("Balancin DPF - Con fines").Delete
  Application.DisplayAlerts = True
  Sheets("Balancin DPF Natural").Select
  Columns("A:A").Delete
  Rows("1:4").Delete
  Range("A1").Select
  For I = 1 To 12
    Selection.End(xlToRight).Select
    Selection.UnMerge
  Next I
  Range("A1").Select
  Range("D:G,I:J,M:T,Y:Y,AB:AK,AN:AN,AQ:AQ").Select
  Selection.Delete Shift:=xlToLeft
  Columns("B:B").EntireColumn.AutoFit
  Rows("1:1").Delete
  Range("A1").Select
End Sub
\`\`\`

> Reporte de Cuentas: Todas las cuentas que se crean o cancelan
\`\`\`vba
Sub Reporte_cuentas_DPF()
  Application.DisplayAlerts = False
  Sheets("Todo DPF").Delete
  Sheets("DPF Juridica - Sin fines").Delete
  Sheets("DPF Juridica - Con fines").Delete
  Application.DisplayAlerts = True
  Sheets("DPF Natural").Select
  Columns("A:A").Delete
  Rows("1:4").Delete
  Range("B:B,L:L,N:O,Q:Q,S:AB,AD:AD,AG:AH,AJ:AK").Select
  Selection.Delete Shift:=xlToLeft
  Range("A1").Select
End Sub
\`\`\`
`

export default function DashboardVentasPage() {
  return (
    <div className="markdown-container">
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={vscDarkPlus}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}
