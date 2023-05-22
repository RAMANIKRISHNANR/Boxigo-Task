import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./Sidebar/SideNav";

const App = () => {
  return (
    <div>
      <Router>
        <SideNav />
      </Router>
    </div>
  );
};

export default App;
