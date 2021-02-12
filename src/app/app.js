import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Modal from "./components/modal";
import Home from "./pages/Home";
import NotFound from "./pages/Not-found";
import User from "./pages/User";
import "./scss/app.scss";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
      <Modal/>
    </Router>
  );
}

export { App };
