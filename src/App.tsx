import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./components/SignIn";
import { DashBoard } from "./components/DashBoard";
import { AuthContext } from "./contexts/AuthContext";
import React, { useContext } from "react";

function App() {
  const context = useContext(AuthContext);
  let foo = () => 0

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={context?.auth.isLoggedIn ? <DashBoard /> : <SignInSide />}
        />
      </Routes>
    </Router>
  );
}

export default App;
