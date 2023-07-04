import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { Context } from "../context";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";


const AppRouter = () => {
  const {store} = useContext(Context);

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
        <Route path='*' element={<Navigate to="/main" />} />
      </Routes>
    )
}

export default observer(AppRouter);