import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = '0edc689c296c4e9991b8b37752686719'
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route key="business" exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route key="general" exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route key="health" exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route key="science" exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route key="general" exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route key="technology" exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
