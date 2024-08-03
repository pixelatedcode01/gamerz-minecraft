import './App.css'
import './Common.css'
import BannerIcons from './Components/BannerIcons'
import Header from './Components/Header'
import MainHeader from './Components/MainHeader'
import Moderators from './Components/Moderators'

function App({ children }) {

  return (
    <div className='main-container col'>
      <Header />
      <BannerIcons />
      <MainHeader />
      <Moderators />
    </div>
  )
}

export default App
