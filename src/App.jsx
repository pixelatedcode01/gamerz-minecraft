import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Common.css'
import BannerIcons from './Components/BannerIcons'
import Document from './Components/Document'
import Header from './Components/Header'
import HeaderRead from './Components/HeaderRead'
import MainHeader from './Components/MainHeader'
import Moderators from './Components/Moderators'
import ShoppingPage from './Components/ShoppingPage'
import TrailerView from './Components/TrailerView'
import { useState } from 'react'
import { ShoppingCartContext } from './Contexts/shoppingCart'
import AdminPanel from './Components/AdminPanel'
import AddItem from './Components/AddItem'

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={[shoppingCart, setShoppingCart]}>
      <div className='main-container col'>
        <TrailerView />
        <Routes>
          <Route path='/' element={<>
            <Header />
            <BannerIcons />
            <MainHeader />
            <Moderators />
          </>} />
          <Route path='/how-to' element={
            <>
              <HeaderRead />
              <Document />
            </>
          }
          />
        </Routes>

      </div>
    </ShoppingCartContext.Provider>
  )
}

export default App
