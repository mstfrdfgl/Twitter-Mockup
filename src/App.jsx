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
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;
const Home = ({ userData }) => {
  const { userId } = useParams();

  return (
    <AppDiv>
      <Sidebar username={userData.username} userId={userId} />
      <MainContent userId={userId} />
    </AppDiv>
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
