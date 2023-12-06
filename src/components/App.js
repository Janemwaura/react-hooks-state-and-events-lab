import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Use the useState hook to create a state variable for dark mode//
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode when the button is clicked //
  const handleToggleDarkMode = () => {
    // Update the state variable by toggling its current value //
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  // Determine the class based on the state variable
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Add an onClick event handler to the button */}
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
