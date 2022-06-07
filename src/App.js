import style from './App.module.css';
import Primary from './Components/Title/Primary/Primary';
import Routes from './AppRoutes';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Primary title="Mars Drone Gallery" />
      </header>
      <main className={style.AppContent}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
