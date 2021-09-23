import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = '0edc689c296c4e9991b8b37752686719'
  state = {
    progress: 0,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height= {3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route key="business" exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route key="general" exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route key="health" exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route key="science" exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route key="general" exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route key="technology" exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
