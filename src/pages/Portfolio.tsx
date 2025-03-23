import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Markdown.css';

const markdownContent = `
Información sobre portfolio
`

export default function Portfolio() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
