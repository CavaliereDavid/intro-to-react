import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

// no multicomp https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
/* Right now this will always show 5 but we want that number in .nav-cart-number to reflect 
how many items we have in our cart. How would we do that? We could move all of cart and its hooks to 
App.jsx and pass it into both Header and Order. 
In an app this small, that could be the right choice. But let's look at another way to do it, context.*/

export const App = () => {
  const cartHook = useState([]);
  // you could do a useState here to pass the context, but we are going to use context as an example
  // you could have multiple CartContexts, It retrieves the one that is closest
  return (
    <StrictMode>
      {/*In React 19 you do not need to specify Provider */}
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
