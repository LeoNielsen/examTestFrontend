import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import Header from "./components/Header";
import Harbours from "./components/Harbours";
import Harbour from "./components/Harbour";
import AllOwners from "./components/AllOwners";
import CreateBoat from "./components/CreateBoat";

export default function App() {


  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  

  return (
    <div>
      <BrowserRouter>
      <Header loggedIn={loggedIn} isAdmin={admin}/>
    <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAdmin={setAdmin}/>} />
        <Route path="harbours" element={<Harbours />} />
        <Route path="harbour" element={<Harbour />} />
        <Route path="allowners" element={<AllOwners />} />
        <Route path="createboat" element={<CreateBoat admin={admin} />} />
        <Route path="*" element={<NoMatch/>} />
    </Routes>
  </BrowserRouter>
    </div>
    
  );
}
