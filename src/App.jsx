import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Common.css'
import BannerIcons from './Components/BannerIcons'
import Document from './Components/Document'
import Header from './Components/Header'
import HeaderRead from './Components/HeaderRead'
import MainHeader from './Components/MainHeader'
import Moderators from './Components/Moderators'
import TrailerView from './Components/TrailerView'
function App() {

  return (
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
  )
}

export default App
