import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import ResultPage from './pages/ResultPage';
//import SearchPage from './pages/SearchPage';
//import AutorizationPage from './pages/AutorizationPage';
//import MainPages from './pages/MainPage';
import { AuthContext } from "./context";
import AppRouter from './components/AppRouter';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      
        <BrowserRouter>
          <div className="App">
            <Header />
            {/* <ResultPage /> */}
            {/* <SearchPage /> */}
            <AppRouter />
            {/* <AutorizationPage /> */}
            <Footer />
          </div>
        </BrowserRouter>
      
    </AuthContext.Provider>
  );
}

export default App;
