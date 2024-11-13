import "./App.css";
export function App() {
  return (
    <article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
      <header>
        <img alt="El avatar de Google" src="https://unavatar.io/google"></img>
        <div>
          <strong>Google</strong>
          <span>@Google Company</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
