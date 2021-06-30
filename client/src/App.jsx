// import logo from './logo.svg';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import CreateProjectForm from "./components/CreateProjectForm";
import EditProjectForm from "./components/EditProjectForm";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar/>
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/create" component={CreateProjectForm} />
          <Route exact path="/projects/update/:id" component={EditProjectForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

