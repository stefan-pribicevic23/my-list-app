import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Items from "./pages/Items";
import MyLists from "./pages/MyLists";

function App() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const routes = [
    {
      path: '/',
      name: 'Moje liste',
      component: <MyLists />,
    },
    {
      path: '/articles',
      name: 'Artikli',
      component: <Items />,
    },
  ];

  return (
    <div className="pt-[100px]">
      <Header
        isOpen={isNavigationMenuOpen}
        setIsOpen={setIsNavigationMenuOpen}
        navMenuItems={routes}
      />
      <Routes>
        {
          routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
