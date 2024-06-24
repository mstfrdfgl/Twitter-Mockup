import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Redirect,
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

const Home = ({ userData }) => {
  const { userId } = useParams();

  return (
    <div className="app">
      <Sidebar username={userData.username} userId={userId} />
      <MainContent userId={userId} />
    </div>
  );
};

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginForm setUserData={setUserData} />
        </Route>
        <Route path="/home/:userId">
          {userData ? <Home userData={userData} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
