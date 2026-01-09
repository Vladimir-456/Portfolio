import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./components/router/router";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/selectors";
import { useEffect } from "react";

function App() {
  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [currentTheme]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
