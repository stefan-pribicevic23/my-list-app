import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const routes = [
    {
      path: '/',
      name: 'Moje liste',
    },
    {
      path: '/articles',
      name: 'Artikli'
    },
  ];

  return (
    <div>
      <Header
        isOpen={isNavigationMenuOpen}
        setIsOpen={setIsNavigationMenuOpen}
        navMenuItems={routes}
      />
    </div>
  );
}

export default App;
