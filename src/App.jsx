import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import MealCard from "./Components/MealCard";
const API_KEY = import.meta.env.VITE_Spoonacular_API_KEY;
const API_BASE_URL = `https://dummyjson.com/recipes`;

const App = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllMeals = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API_BASE_URL);
      if (!res.ok) {
        console.log("error");
        return;
      }
      const data = await res.json();
      setAllMeals(data.recipes || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMeals();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 h-screen font-inter">
      <Navbar />
      <main className="my-6">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-2 gap-4  md:grid-cols-3 ">
            {allMeals.map((meal) => {
              return <MealCard key={meal.id} meal={meal} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
