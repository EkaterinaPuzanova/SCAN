import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import AccountInfo from "../services/AccountInfo";
import ObjectSearch from "../services/ObjectSearch";


export default class Store {
    isAuth = false;
    isCheck = false;
    isLoading = false;
    usedCompanyCount = 0;
    companyLimit = 0;
    currentTariff = 'Beginner';
    isCorrectPassword = true;
    isFindResult = false;
    
    totalResultDocuments = 0;
    resultObjectSearch = {};

    constructor() {
      makeAutoObservable(this);
    }

    setCheck(bool) {
      this.isCheck = bool;
    }

    setResultObjectSearch(res) {
      this.resultObjectSearch = res;
    }
    
    setIsFindResult(res) {
      this.isFindResult = res;
    }

    setTotalResultDocuments(res) {
      this.totalResultDocuments = res;
    }

    setAuth(bool) {
      this.isAuth = bool;
    }

    setCorrectPassword(bool) {
      this.isCorrectPassword = bool;
    }

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
        this.setResultObjectSearch(response.data);
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
        } catch (e) {
            console.log(e.message);
            this.setCorrectPassword(false);
        }
    }

    logout() {
      localStorage.removeItem(`token${localStorage.getItem('account')}`);
      localStorage.removeItem(`expire${localStorage.getItem('account')}`);
      localStorage.removeItem('account');
      this.setAuth(false);     
    }

    checkAuth() {
      if (new Date() < new Date(localStorage.getItem(`expire${localStorage.getItem('account')}`)) ) {
        this.setAuth(true);
        console.log(this.isAuth)
        this.setCheck(true);
      } else {
        this.logout();
        this.setCheck(true);
      }
    }
}
