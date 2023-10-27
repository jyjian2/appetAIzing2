import SignUp from "../src/components/sign-up/sign-up.component.js";
import SignIn from "../src/components/sign-in/sign-in.component.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/main-page/main-page.component.js";
import HomePage from "./components/home-page/home-page.component";
import CreateRecipe from "./components/create-recipe/create-recipe.component.js";
import { UserContext } from "./contexts/user.context";
import { useState } from "react";
import ProtectedRoutes from "./components/protected-routes/protected-routes.component";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  console.log("1. app.js currentUser: ");
  console.log(currentUser);

  return (
    <Router>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          {/* </Route> */}
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
