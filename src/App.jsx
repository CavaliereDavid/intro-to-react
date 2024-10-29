import { createRoot } from "react-dom/client";
import Order from "./Order";
import { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";

// no multicomp https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md

export const App = () => {
  return (
    <div>
      <StrictMode>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <Order />
        <PizzaOfTheDay />ß
      </StrictMode>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
