import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  return (
    <div>
      <Header isOpen={isNavigationMenuOpen} setIsOpen={setIsNavigationMenuOpen} />
    </div>
  );
}

export default App;
