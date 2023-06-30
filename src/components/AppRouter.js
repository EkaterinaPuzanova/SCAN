import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
//import { Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { Context } from "../context";
//import Loader from "./UI/Loader/Loader";
import MainPages from '../pages/MainPage';


const AppRouter = () => {
  const {store} = useContext(Context);
  

    // const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth)

    // if (isLoading) {
    //     return <Loader width='24' height='24'/>
    // }

    return (
      <Routes>
        {store.isAuth
          ?
          privateRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path} />)
          :
          publicRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />)
        }
        <Route path='*' element={<MainPages />} />
        {/* <Route path="/redirect" element={ <Navigate to="/autorization" /> } /> */}
      </Routes>
    )
}

export default AppRouter;