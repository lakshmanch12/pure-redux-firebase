import React from "react";
import { Route , Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
      {/* <h1>iijnvijjjjjjjjjjjjjjjjjj</h1> */}
      <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/add" element={<AddPost />} /> 
      <Route exact path="/edit/:id" element={<EditContact />} /> 
      </Routes>
    </div>
  );
};
export default App;
