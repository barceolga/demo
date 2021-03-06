import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import AuthorsPage from './authors/AuthorsPage';
import ManageAuthorPage from './authors/ManageAuthorPage'
import ManageCoursePage from "./courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/courses" component={CoursesPage}></Route>
      <Route path="/authors" component={AuthorsPage}></Route>
      <Route path="/author/:slug" component={ManageAuthorPage}></Route>
      <Route path="/author" component={ManageAuthorPage}></Route>
      <Route path="/course/:slug" component={ManageCoursePage}></Route>
      <Route path="/course" component={ManageCoursePage}></Route>
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
