import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashbord';
import ProjectDetails from './components/projects/ProjectDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/project/:id"  component={ProjectDetails}/>
        <Route path="/login"  component={Login}/>
        <Route path="/signup"  component={Signup}/>
        <Route path="/newproject" component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
