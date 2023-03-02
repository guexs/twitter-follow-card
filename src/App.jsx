import { AppTwo } from "./AppTwo"

export function App() {
  return (
    <article>
      <header>
        <img src="https://unavatar.io/midudev" alt="El avatar de midudev"/>
        <div>
          <strong>Miguel Ángel Durán</strong>
          <span>@midudev</span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
      <AppTwo altImg="Mark Zuckerberg" srcImg="https://unavatar.io/markzuckerberg" Name="Mark Zuckerberg" userName="@zuck"/>
      <AppTwo altImg="React JS" srcImg="https://unavatar.io/reactjs" Name="ReactJS" userName="@reactjs"/>
    </article>
    
 )
}