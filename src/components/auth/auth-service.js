// auth/auth-service.js

import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://ironhealth.herokuapp.com/api',
      withCredentials: true
    });
    this.service = service;
  }




signup = (username, password, goals) => {
    console.log("signup in auth service ++++++++++++++++++++ ", username);
    console.log("signup in auth service ++++++++++++++++++++ ", password);
    console.log("signup in auth service ++++++++++++++++++++ ", goals);
    return this.service.post('/signup', {username, password, goals})
    .then(response => response.data)

  }


  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }


  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }



}

export default AuthService;