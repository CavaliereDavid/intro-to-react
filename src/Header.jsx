import { useContext } from "react";
import { CartContext } from "./contexts";

// redux has become unnecessary, context handle all what redux used to do https://frontendmasters.com/courses/enterprise-ui-dev/?utm_source=youtube&utm_medium=course_link&utm_campaign=enterprise-ui-dev

// you can mix useReducer and context to get most of redux
export default function Header() {
  const [cart] = useContext(CartContext); // i am not going to use the setter
  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
