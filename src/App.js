import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Notes from './components/Notes';
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/notes">
          <Notes></Notes>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;