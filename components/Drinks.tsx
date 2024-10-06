import React from "react";
import DrinkList from "./DrinkList";


const Drinks: React.FC = () => {
    return (
        <>
        <DrinkList category="vodka" />
        <DrinkList category="gin" />
        <DrinkList category="whisky" />
        <DrinkList category="rum" />
        </>
    );
  };

export default Drinks;