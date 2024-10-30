import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
// redux is no longer useful
// tanstack is more focused on client side routing, while react router is fifty fifty
// we are basically going to remake everything that was created in app.jsx , and make it much smaller

// convention of tanstack to define it route

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
