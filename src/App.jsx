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
import styled from "styled-components";
import "./App.css";

const AppDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

function Home({ userData }) {
  //kullanıcı başarılı bir şekilde login olduğunda axiostan history.push ile gelen ID bilgisi burada useParam hook kullanılarak alınır ve gerekli componentlere prop olarak iletilir.
  const { userId } = useParams();

  return (
    <AppDiv>
      {/* Sidebar componentine login olan kullanıcının kullanıcı adını ve id bilgisini gösterebilmek adına bu bilgiler prop olarak iletilir. */}
      <Sidebar username={userData.username} userId={userId} />
      <MainContent />
    </AppDiv>
  );
}

export default function App() {
  //LoginForm componentine prop olarak iletmek üzere formda girilen kullanıcı adı ve axios isteğinden gelen ID bilgileri ile güncellenir.
  const [userData, setUserData] = useState(null);

  return (
    //route yönetimi Router aracılığıyla başlatılır
    <Router>
      {/* Switch componenti, rotalardan yalnızca bir tanesinin eşleşmesini sağlar */}
      <Switch>
        {/* kullanıcı ilk giriş yaptığında karşılaştığı LoginForm componentinin pathi */}
        <Route exact path="/">
          {/* LoginForm componenti render edilir ve setUserData prop olarak iletilir. */}
          <LoginForm setUserData={setUserData} />
        </Route>
        {/* kullanıcı başarılı bir şekilde login olduğunda gelen ID bilgisi ile birlikte gerekli pathe yönlendirilir */}
        <Route path="/home/:userId">
          {/* userData statei doğru bir şekilde güncellenmiş ise Home bileşenini render eder. sayfa yenilendiğinde tekrar login sayfasına yönlendirmek için redirect kullandık */}
          {userData ? <Home userData={userData} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}
