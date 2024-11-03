import "./App.css";
export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de Google"
          src="https://unavatar.io/google"
        />
        <div className="tw-followCard-info">
          <strong>Google Company</strong>
          <span className="tw-followCard-infoUserName">@Google</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
