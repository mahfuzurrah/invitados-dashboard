import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Guests from "./pages/Guests";
import ManageRoles from "./pages/ManageRoles";
import ManageUsers from "./pages/ManageUsers";
import ScrollToTopOnReload from "./components/ScrollToTopOnReload";

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnReload/>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guests_list" element={<Guests />} />
            <Route path="/manage_roles" element={<ManageRoles />} />
            <Route path="/manage_users" element={<ManageUsers />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
