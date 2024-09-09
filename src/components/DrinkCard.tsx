import React from "react";
import { Drink } from "../data/drinks";

interface DrinkItemProps {
    drink: Drink;
}

const DrinkCard: React.FC<DrinkItemProps> = ({ drink }) => {
  return (
    <div
      className={`flex bg-gradient-to-tr from-slate-900 to-slate-700 shadow-lg rounded-lg overflow-hidden max-w-md transition-transform transform ${
        drink.highlighted ? 'shadow-2xl' : ''
      }`}
      style={{
        boxShadow: drink.highlighted
          ? '0px 0px 5px rgba(255, 255, 255, 0.8)'
          : '0px 0px 5px rgba(0, 0, 0, 0.3)',
      }}
    >
      <img
        src={drink.img}
        alt={drink.name}
        className="w-30 h-52 object-cover"
        style={{ width: '120px', height: '210px' }}
      />

      <div className="flex flex-col justify-between p-4">
        <h3 className="text-xl font-bold text-white mb-2">{drink.name}</h3>
        
        <div className="space-y-2">
          {drink.glassPrice && (
            <div className="flex items-center">
              <img src={drink.glassIcon} alt="Glass Icon" className="w-8 h-8 mr-2" />
              <span className="text-xl text-white">{drink.glassPrice} €</span>
            </div>
          )}
          {drink.bottlePrice && (
            <div className="flex items-center">
              <img src={drink.bottleIcon} alt="Bottle Icon" className="w-8 h-8 mr-2" />
              <span className="text-xl text-white">{drink.bottlePrice} €</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
