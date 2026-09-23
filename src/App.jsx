import {  Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import './App.css'
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile.jsx";
import CatDetails from "./pages/CatDetails.jsx";

function App() {
  return (
   
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cats/:id" element={<CatDetails />} />
        </Route>
      </Routes>
   
  );
}

export default App;