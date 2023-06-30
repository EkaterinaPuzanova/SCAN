import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
//import axios from 'axios';
//import {API_URL} from "../http";


export default class Store {
    //user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    // setUser(user) {
    //     this.user = user;
    // }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(login, password) {
        try {
            const response = await AuthService.login(login, password);
            console.log(3456)
            console.log(response)
            localStorage.setItem(`token${login}`, response.data.accessToken);
            localStorage.setItem(`expire${login}`, response.data.expire);
            localStorage.setItem('account', login);
            this.setAuth(true);
            
            //window.location.assign('http://localhost:3000/main')
            // this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem(`token${localStorage.getItem('account')}`);
            localStorage.removeItem(`expire${localStorage.getItem('account')}`);
            localStorage.removeItem('account');
            this.setAuth(false);
            // this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
      console.log(new Date())
      console.log(localStorage.getItem(`expire${localStorage.getItem('account')}`)) 
      console.log(new Date(localStorage.getItem(`expire${localStorage.getItem('account')}`))) 
        if (new Date() < new Date(localStorage.getItem(`expire${localStorage.getItem('account')}`)) ) {
          this.setAuth(true);
          console.log(this.isAuth)
        }
        // this.setLoading(true);
        // try {
        //     const response = await axios.get(`${API_URL}/refresh`, {withCredentials: false})
        //     console.log(response);
        //     localStorage.setItem('token', response.data.accessToken);
        //     this.setAuth(true);
        //     // this.setUser(response.data.user);
        // } catch (e) {
        //     console.log(e.response?.data?.message);
        // } finally {
        //     this.setLoading(false);
        // }
    }
}
