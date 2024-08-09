import './App.css'
import Navbar from './components/Navbar'
import SearchMenu from './components/SearchMenu'
import ExploreFoodList from './components/ExploreFoodList'
import FoodMenuList from './components/FoodMenuList'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <SearchMenu></SearchMenu>
    <ExploreFoodList />
    <FoodMenuList />
    </>
  )
}

export default App
