import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import AccountInfo from "../services/AccountInfo";
import ObjectSearch from "../services/ObjectSearch";
import ObjectSearchDate from "../services/ObjectSearchDate";
import Documents from "../services/Documents";


export default class Store {
    isAuth = false;
    isCheck = false;
    isLoading = false;
    usedCompanyCount = 0;
    companyLimit = 0;
    currentTariff = 'Beginner';
    isCorrectPassword = true;
    isError = false;
    isFindResult = false;
    isFindResultObjectSearch = false;
    isLoadedDocuments = false;
    
    totalResultDocuments = 0;
    resultObjectSearch;
    resultObjectSearchDate;
    documents;
    arrDocuments = [];

    constructor() {
      makeAutoObservable(this);
    }

    setCheck(bool) {
      this.isCheck = bool;
    }

    setIsError(bool) {
      this.isError = bool;
    }

    // setResultObjectSearch(res) {
    //   this.resultObjectSearch = res;
    // }
    setArrDocuments(arr) {
      this.arrDocuments = [...this.arrDocuments, arr];
    }
    
    setIsFindResult(res) {
      this.isFindResult = res;
    }

    setIsLoadedDocuments(bool) {
      this.isLoadedDocuments = bool;
    }

    setIsFindResultObjectSearch(bool) {
      this.isFindResultObjectSearch = bool;
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
        this.resultObjectSearch = response.data;
        this.setIsFindResultObjectSearch(true)
      } catch (e) {
        console.log(e);
      } finally {
        this.setLoading(false);
        // this.setIsFindResultObjectSearch(true)
      }
    }
    
    async getObjectSearchDate(obj) {
      this.setLoading(true);
      try {
        const responseSearchDate = await ObjectSearchDate.fetchObjectSearchDate(obj);
        //console.log(responseSearchDate.data.items);
        this.resultObjectSearchDate = responseSearchDate.data.items.map((item) => (item.encodedId));
        // this.resultObjectSearchDate.map((item) => (item.encodedId))
        //console.log('rrerererwer', this.resultObjectSearchDate.slice(0, 10))
        //this.setArrDocuments(this.resultObjectSearchDate.slice(0, 10))
        //console.log('enenend', this.arrDocuments[0])
        //this.getDocuments(this.arrDocuments[0]);
        this.getDocuments(this.resultObjectSearchDate.slice(0, 10))
        this.setIsFindResult(true)
        //УУУУУУУРРРРРРАААААА
      } catch (e) {
        console.log(e);
      } finally {
        this.setLoading(false);
        // this.setIsFindResult(true)
      }
    }

    async getDocuments(arr) {
      try {
        const response = await Documents.fetchDocuments(arr);
        console.log(66556565656546, response.data);
        this.documents = response.data.map((item) => (item.ok));
        console.log(this.documents);
      } catch (e) {
        console.log(e);
      } finally {
        this.setIsLoadedDocuments(true);
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
