import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="./src/assets/logo.png" alt="Logo" className="h-16" />
      </div>

      <div className="text-center flex-1">
        <h1 className="text-3xl font-bold text-white tracking-widest">DRINKS</h1>
      </div>

      <div>
        <button className="bg-yellow-400 text-slate-900 hover:bg-yellow-200 font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

