import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ResultPage from './pages/ResultPage';
//import SearchPage from './pages/SearchPage';
//import AutorizationPage from './pages/AutorizationPage';
//import MainPages from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ResultPage />
      {/* <SearchPage /> */}
      {/* <MainPages /> */}
      {/* <AutorizationPage /> */}
      <Footer />
    </div>
  );
}

export default App;
