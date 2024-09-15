import { FC } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Drinks from './components/Drinks'

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Drinks />
    <Footer />
    </>
  );
};

export default App;
