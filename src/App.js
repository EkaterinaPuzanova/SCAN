import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AutorizationPage from './pages/AutorizationPage';
//import MainPages from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPages /> */}
      <AutorizationPage />
      <Footer />
    </div>
  );
}

export default App;
