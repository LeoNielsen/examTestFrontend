import URL from "./settings";
import jwtDecode from "jwt-decode";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }

  const decodeToken = () => {
    const token = getToken()
    const decodeToken = token;
    const decode = jwtDecode(decodeToken)
    setToken(token);
    return decode
  }

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  }
  const logout = () => {
    localStorage.removeItem("jwtToken");
  }


  const login = (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }
  const fetchUserInfo = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/user/userinfo", options).then(handleHttpErrors);
  }

  const fetchAllOwners = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/user/allusers", options).then(handleHttpErrors);
  }

  const fetchAllBoatByHarbour = (id) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + `/api/harbour/${id}/allboats`, options).then(handleHttpErrors);
  }

  const fetchAllOwnersByBoat = (id) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + `/api/boat/${id}/allowners`, options).then(handleHttpErrors);
  }

  const createBoat = (data) => {
    const options = makeOptions("POST", true, data); //True add's the token
    return fetch(URL + `/api/boat/createboat`, options).then(handleHttpErrors);
  }

  const addBoatToHarbour = (harbourId, boatId) => {
    const options = makeOptions("PUT", true); //True add's the token
    return fetch(URL + `/api/harbour/${harbourId}/addboat/${boatId}`, options).then(handleHttpErrors);
  }

  const updateBoat = (id, data) => {
    const options = makeOptions("PUT", true, data); //True add's the token
    return fetch(URL + `/api/boat/${id}/updateboat`, options).then(handleHttpErrors);
  }

  const deleteBoat = (id) => {
    const options = makeOptions("PUT", true); //True add's the token
    return fetch(URL + `/api/boat/${id}/deleteboat`, options).then(handleHttpErrors);
  }

  const getHarbours = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + `/api/harbour/all`, options).then(handleHttpErrors);

  }

  const create = (username, password) => {
    const options = makeOptions("POST", true, { userName: username, userPass: password }); //True add's the token
    console.log(username + " " + password);
    return fetch(URL + "/api/user/newuser", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchUserInfo,
    create,
    decodeToken,
    fetchAllOwners,
    fetchAllBoatByHarbour,
    fetchAllOwnersByBoat,
    createBoat,
    updateBoat,
    deleteBoat,
    addBoatToHarbour,
    getHarbours,
  }
}
const facade = apiFacade();
export default facade;
