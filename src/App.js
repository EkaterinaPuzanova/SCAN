import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Context } from "./context";
import AppRouter from './components/AppRouter';
import { useContext } from 'react';
import { observer } from "mobx-react-lite";

function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    console.log(store.isAuth)
    if (localStorage.getItem(`token${localStorage.getItem('account')}`)) {
      store.checkAuth();
    }
  }, [])

  if (localStorage.getItem(`token${localStorage.getItem('account')}`) && !store.isCheck ) {
    return <div>Загрузка...</div>
  }

  return (
  
        <BrowserRouter>
          <div className="App">
            <Header />
            <AppRouter />
            <Footer />
          </div>
        </BrowserRouter>
  );
}

export default observer(App);
