import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import ResultPage from './pages/ResultPage';
//import SearchPage from './pages/SearchPage';
//import AutorizationPage from './pages/AutorizationPage';
//import MainPages from './pages/MainPage';
import { Context } from "./context";
import AppRouter from './components/AppRouter';
import { useContext } from 'react';
import { observer } from "mobx-react-lite";
//import Store from './store/Store';



function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //       setIsAuth(true)
  //   }
  //   setLoading(false);
  // }, [])
  const {store} = useContext(Context);

  useEffect(() => {
    store.checkAuth();
  }, [])

  return (
    // <Context.Provider value={{
    //   store
    // }}>
      
        <BrowserRouter>
          <div className="App">
            {/* {store.isAuth ? 'yes' : 'not'} */}
            {/* {store.isAuth ? 'ghbdtn' : 'hot'} */}
            <Header />
            {/* <ResultPage /> */}
            {/* <SearchPage /> */}
            <AppRouter />
            {/* <AutorizationPage /> */}
            <Footer />
          </div>
        </BrowserRouter>
      
    // </Context.Provider>
  );
}

export default observer(App);
