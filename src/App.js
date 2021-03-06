import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import store from "./redux/store";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import BookmarkPage from "./components/BookmarkPage";

const App = () => {
  let globalState = store.getState();
  let isAuthenticated = globalState.auth.isAuthenticated;
  const [globalEffectVar, setGlobalEffectVar] = useState(false);

  const pageSize = 9;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "0edc689c296c4e9991b8b37752686719";
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = "#042743";
  }, []);

  const darkStyleObj = {
    navbarBackgroundColor: "#041C32",
    backgroundColor: "#042743",
    cardHolder: "#064663",
    cardTextHolder: "#fff",
    cardTextDesc: "#FEF9A7",
    buttonHolder: "#04293A",
    titleColor: "#ECB365",
    authorTextColor: "#B1D0E0",
  };

  const lightStyleObj = {
    navbarBackgroundColor: "#F8F9FA",
    backgroundColor: "#ffffff",
    cardHolder: "#ffffff",
    cardTextHolder: "#406882",
    buttonHolder: "#ECB365",
    cardTextDesc: "#000",
    titleColor: "#212529",
    authorTextColor: "#000",
  };

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "#ffffff";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          styleObj={darkMode ? darkStyleObj : lightStyleObj}
          darkMode={darkMode}
          toggleMode={toggleMode}
          isAuthenticated={isAuthenticated}
          setGlobalEffectVar={setGlobalEffectVar}
          globalEffectVar={globalEffectVar}
        />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/bookmarks">
            <BookmarkPage
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="business" exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="business"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="entertainment"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="general" exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="general"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="health" exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="health"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              isAuthenticated={isAuthenticated}
              setGlobalEffectVar={setGlobalEffectVar}
            />
          </Route>
          <Route key="science" exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="science"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="general" exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="sports"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route key="technology" exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="technology"
              darkMode={darkMode}
              styleObj={darkMode ? darkStyleObj : lightStyleObj}
              globalEffectVar={globalEffectVar}
              setGlobalEffectVar={setGlobalEffectVar}
              isAuthenticated={isAuthenticated}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
