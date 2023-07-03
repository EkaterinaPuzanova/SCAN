import AutorizationPage from "../pages/AutorizationPage";
import MainPages from "../pages/MainPage";
import ResultPage from "../pages/ResultPage";
import SearchPage from "../pages/SearchPage";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    {path: '/result', component: <ResultPage />, exact: true},
    {path: '/search', component: <SearchPage />, exact: true},
    {path: '/main', component: <MainPages />, exact: true},
    {path: '/autorization', component: <Navigate to="/main" />, exact: true}
]

export const publicRoutes = [
    {path: '/main', component: <MainPages />, exact: true},
    {path: '/autorization', component: <AutorizationPage />, exact: true},
    {path: '/search', component: <Navigate to="/main" />, exact: true},
    {path: '/result', component: <Navigate to="/main" />, exact: true}
]
