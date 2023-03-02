export function AppTwo({ altImg, srcImg, Name, userName }) {
  return (
    <article>
      <header>
        <img alt={altImg} src={srcImg}/>
       <div>
        <strong>{Name}</strong>
        <span>{userName}</span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}