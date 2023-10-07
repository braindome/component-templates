import { useState } from "react";
import * as React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";"./components/Dropdown.jsx";

function App() {

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };

  return (
    <div>
      <Dropdown
        open={open}
        trigger={<button onClick={handleOpen}>Dropdown</button>}
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
        ]}
      />
    </div>
  );
}

export default App;
