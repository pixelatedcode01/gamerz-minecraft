import { Route, Routes } from 'react-router-dom'
import './App.css'
import './Common.css'
import BannerIcons from './Components/BannerIcons'
import Document from './Components/Document'
import Header from './Components/Header'
import HeaderRead from './Components/HeaderRead'
import MainHeader from './Components/MainHeader'
import Moderators from './Components/Moderators'

function App() {

  return (
    <div className='main-container col'>
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
      {/* <BannerIcons />
      <MainHeader />
      <Moderators /> */}
    </div>
  )
}

export default App
