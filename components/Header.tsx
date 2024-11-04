import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-16" />
      </div>

      <div className="text-center flex-1">
        <h1 className="text-3xl font-bold text-white tracking-widest">
          DRINKS
        </h1>
      </div>
    </header>
  );
};

export default Header;
