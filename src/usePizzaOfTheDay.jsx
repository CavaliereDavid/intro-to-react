import { useState, useEffect, useDebugValue } from "react";
// in the custom hook

// you do not need a wrapper, a custom hook is a simple function
// use is a convention and linting will interpret it
// we used lower case u because it is returning a hook and not a component therefore it is easier to detect that it is a hook

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null); // either null, undefined, void , 0;

  // for the dev tools
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");
  // Ajax request
  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
