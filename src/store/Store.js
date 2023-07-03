import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import AccountInfo from "../services/AccountInfo";
import ObjectSearch from "../services/ObjectSearch";
//import axios from 'axios';
//import {API_URL} from "../http";


export default class Store {
    //user = {} as IUser;
    isAuth = false;
    isCheck = false;
    //isAuth = this.checkAuth();
    isLoading = false;
    usedCompanyCount = 0;
    companyLimit = 0;
    currentTariff = 'Beginner';
    isCorrectPassword = true;

    constructor() {
      makeAutoObservable(this);
    }

    setCheck(bool) {
      this.isCheck = bool;
    }

    setAuth(bool) {
      this.isAuth = bool;
    }

    setCorrectPassword(bool) {
      this.isCorrectPassword = bool;
    }

    // setUser(user) {
    //     this.user = user;
    // }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setUsedCompanyCount(num) {
      this.usedCompanyCount = num;
    }

    setCompanyLimit(num) {
      this.companyLimit = num;
    }

    setcurrentTariff(num) {
      this.currentTariff = num;
    }


    async getInfoAccount() {
      this.setLoading(true);
      try {
        const response = await AccountInfo.fetchInfoAccount();
        //console.log(response.data.eventFiltersInfo);
        //this.infoAccount = response.data.eventFiltersInfo;
        this.setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
        this.setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
        console.log(new Date(), this.usedCompanyCount, this.companyLimit);
      } catch (e) {
        console.log(e);
      } finally {
        this.setLoading(false);
      }
    }

    async getObjectSearch(obj) {
      this.setLoading(true);
      try {
        const response = await ObjectSearch.fetchObjectSearch(obj);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        this.setLoading(false);
      }
    }

    async login(login, password) {
        try {
            const response = await AuthService.login(login, password);
            console.log(3456)
            
            localStorage.setItem(`token${login}`, response.data.accessToken);
            localStorage.setItem(`expire${login}`, response.data.expire);
            localStorage.setItem('account', login);
            console.log(response.data)
            this.setAuth(true);
            //window.location.assign('http://localhost:3000/main')
            // await response.then(window.location.assign('http://localhost:3000/main'))
            // await response.then(() => {
            //                 console.log(3456);
            //                 console.log(response.data);
            //                 localStorage.setItem(`token${login}`, response.data.accessToken);
            //                 localStorage.setItem(`expire${login}`, response.data.expire);
            //                 localStorage.setItem('account', login);
            //                 this.setAuth(true);
            //               })
            //               .then(window.location.assign('http://localhost:3000/main'));
            //window.location.assign('http://localhost:3000/main')
            // this.setUser(response.data.user);
        } catch (e) {
            console.log(e.message);
            this.setCorrectPassword(false);
        }
    }

    // async logout() {
    //     try {
    //       console.log(3333)
    //         const response = await AuthService.logout();
    //         console.log(response);
    //         localStorage.removeItem(`token${localStorage.getItem('account')}`);
    //         localStorage.removeItem(`expire${localStorage.getItem('account')}`);
    //         localStorage.removeItem('account');
    //         this.setAuth(false);
    //         // this.setUser({});
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     }
    // }
    logout() {
      localStorage.removeItem(`token${localStorage.getItem('account')}`);
      localStorage.removeItem(`expire${localStorage.getItem('account')}`);
      localStorage.removeItem('account');
      this.setAuth(false);  
      // window.location.assign('http://localhost:3000/main');       
    }

    checkAuth() {
      // console.log(new Date())
      // console.log(localStorage.getItem(`expire${localStorage.getItem('account')}`)) 
      // console.log(new Date(localStorage.getItem(`expire${localStorage.getItem('account')}`))) 
      if (new Date() < new Date(localStorage.getItem(`expire${localStorage.getItem('account')}`)) ) {
        this.setAuth(true);
        console.log(this.isAuth)
        this.setCheck(true);
        // return true
      } else {
        this.logout();
        this.setCheck(true);
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
