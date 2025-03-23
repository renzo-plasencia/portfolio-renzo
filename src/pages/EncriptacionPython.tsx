import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Markdown.css';

const markdownContent = `
# APP para encriptar mensajes en Python 🐍

| It's a web app that allows you to encrypt and decrypt using a Fernet encryption method.

| Una aplicación web que te permite encriptar y desencriptar usando el método de encriptación de Fernet.

## What's Fernet encrypted? 🔏
Fernet (symmetric encryption) guarantees that a message encrypted using it cannot be manipulated or read without the key. Fernet is an implementation of symmetric (also known as “secret key”) authenticated cryptography. Fernet also has support for implementing key rotation via MultiFernet.

https://cryptography.io/en/latest/fernet/

## Features 🐌
- Encrypt using a manual key.
- Encrypt by generating a key.
- 150 words maximum.
- Decrypt offline using a manual key.

## Get started fast 🚀
1) Clone repository or download it:
\`\`\`
      gh repo clone renzo-plasencia/encrypt-app-v2
\`\`\`
2) [Install Libraries on Python](#libraries)
3) Open terminal and search the folder.
4) Run this command:
\`\`\`
      python app.py
\`\`\`


## Libraries

*Cryptography*
\`\`\`
    pip install cryptography
\`\`\`

*Flask*
\`\`\`
    pip install flask
\`\`\`

## Example
![](https://github.com/renzo-plasencia/encrypt-app-v2/assets/148007927/b11ce182-639b-45e6-a2a9-c36faebb9d53)
![](https://github.com/renzo-plasencia/encrypt-app-v2/assets/148007927/02b45eaa-56f4-41db-a4f9-bcf45e058e23)
`

export default function EncriptacionPython() {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
