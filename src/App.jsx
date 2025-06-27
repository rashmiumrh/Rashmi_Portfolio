import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import MainPage from "./Component/MainPage";

const App = () => {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div>
      <MainPage setActiveNav={setActiveNav} activeNav={activeNav} />
    </div>
  );
};

export default App;