import { createRoot } from "react-dom/client";
import Order from "./Order";

// no multicomp https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md

export const App = () => {
  return (
    <div>
      <Order />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
