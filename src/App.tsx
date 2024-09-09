import './App.css'
import Header from './components/Header'
import DrinkList from './components/DrinkList'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
    <DrinkList category="vodka" />
    <DrinkList category="gin" />
    <DrinkList category="whisky" />
    <DrinkList category="rum" />
    <Footer />
    </>
  )
}

export default App
