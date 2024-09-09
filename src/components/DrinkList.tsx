import React from "react";
import { drinks } from "../data/drinks";
import { Drink } from "../data/drinks";
import DrinkCard from "./DrinkCard";

interface DrinkListProps {
    category: string;
}

function upperFirstLetter(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const DrinkList: React.FC<DrinkListProps> = ({ category }) => {
    const filteredDrinks = drinks.filter((drink: Drink) =>
      drink.category.toLowerCase() === category.toLowerCase()
    );
  
    return (
      <>
      <h2 className="text-4xl my-7 pl-5">{upperFirstLetter(category)}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-10">
        {filteredDrinks.map((drink, index) => (
          <DrinkCard key={index} drink={drink} />
        ))}
      </div>
      </>
    );
  };

export default DrinkList;