import "./App.css";

//importing necessary componenets and function from the react-router-dom library for routing.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Main from "./Components/Home/Main";
import PropertyList from "./Components/Home/PropertyList";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import Login from "./Components/User/Login";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./Store/User/user-action";
import { userActions } from "./Store/User/user-slice";
import Signup from "./Components/User/Signup";
import Profile from "./Components/User/Profile";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import AccomodationForm from "./Components/Accomodation/AccomodationForm";
import Accomodation from "./Components/Accomodation/Accomodation.js";


function App() {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearError());
    }
    dispatch(currentUser());
  }, [errors, dispatch]);

  //manages the routing configuration for the application.
  const router = createBrowserRouter(
    //creates routes from the elements passed to it.
    createRoutesFromElements(
      //defines a Route component that matches all paths "/" and renders the main component
      // exact proporties ensure that the route matches exactly what you gave in path
      <Route path="/" element={<Main />} id="main" exact>
        <Route id="home" index element={<PropertyList />} exact />
        <Route
          element={<PropertyDetails />}
          id="PropertyDetails"
          path="propertylist/:id"
          exact
        />
        <Route id="login" path="login" element={<Login />} />
        <Route id="signup" path="signup" element={<Signup />} />
        <Route id="profile" path="profile" element={<Profile />} />
       
        <Route
          id="forgotpassword"
          path="user/forgotpassword"
          element={<ForgotPassword />}
        />
        <Route
          id="resetpassword"
          path="user/resetPassword/:token"
          element={<ResetPassword />}
        />
      <Route 
      id="accomodation"
      path="accommodation"
      element={<Accomodation />}
      />
       <Route 
      id="accomodationform"
      path="accomodationform"
      element={<AccomodationForm />}
      />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* This ensures that the routing functionality is available throughout the application */}
      <RouterProvider router={router} />
      <ToastContainer
        position="button-center"
        autoClose={3000}
        draggable={true}
        transition={Flip}
      />
    </div>
  );
}

export default App;
