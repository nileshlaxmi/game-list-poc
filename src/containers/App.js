import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Dashboard />
    </div>
  );
}

export default App;
