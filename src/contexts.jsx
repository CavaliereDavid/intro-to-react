// here we throw all the contexts
import { createContext } from "react";

// we are going to hold a hook here, the return type for a hook is an array

// const hook = [ [ ], function(){}] this is how a hooks looks like, the [] is the cart
// named exports, because we may have multiple contexts
export const CartContext = createContext([[], function () {}]);
