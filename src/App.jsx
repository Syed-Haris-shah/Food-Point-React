import './App.css'
import Navbar from './components/Navbar'
import SearchMenu from './components/SearchMenu'
import ExploreFoodList from './components/ExploreFoodList'
import FoodMenuList from './components/FoodMenuList'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <SearchMenu></SearchMenu>
    <ExploreFoodList />
    <FoodMenuList />
    <Footer />
    </>
  )
}

export default App
