import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import LoginFormModal from "./components/LoginFormModal";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import UploadImages from "./components/file_upload/UploadImages";
import ViewImages from "./components/file_upload/ViewImages";
import Home from "./components/Home";
import SingleRecipeDetails from "./components/SingleRecipeDetails";
import "./index.css";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import Addingredients from "./components/Addingredients";
import SignupFormModal from "./components/SignupFormModal";
import CreateRecipeModal from "./components/CreateRecipeModal";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Search from "./components/Search/search";

function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/recipes/:recipeId" exact={true}>
          <SingleRecipeDetails />
        </Route>
        <Route path="/login" exact={true}>
          <LoginFormModal />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignupFormModal />
        </Route>
        <Route path="/users/:userId" exact={true}>
          <User />
        </Route>
        <Route path="/upload" exact={true}>
          <UploadImages />
        </Route>
        <Route path="/images" exact={true}>
          <ViewImages />
        </Route>
        <Route path="/recipes" exact={true}>
          <CreateRecipeModal />
          <Route path="/users" exact={true}>
            <UsersList />
          </Route>
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/search" exact={true}>
          <Search />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
