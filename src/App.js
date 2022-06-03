import style from "./App.module.css";
import TitleApp from "./Components/Title/TitleApp/TitleApp";
import Routes from "./AppRoutes";

function App() {
  return (
    <div className={style.App}>
      <header>
        <TitleApp />
      </header>
      <main className={style.AppContent}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
