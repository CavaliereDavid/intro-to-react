import { useState, useEffect, useDebugValue } from "react";

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
