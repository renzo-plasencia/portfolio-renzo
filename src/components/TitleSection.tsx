import '../styles/TitleSection.css'

function TitleSection({ title }: { title: string }) {
    return (
        <div className='title-section'>
            <h1>{ title }</h1>
            <div className="title-underline"></div>
        </div>
    )
  }

  export default TitleSection