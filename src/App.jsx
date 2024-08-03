import './App.css'
import './Common.css'
import BannerIcons from './Components/BannerIcons'
import Header from './Components/Header'
import MainHeader from './Components/MainHeader'

function App({ children }) {

  return (
    <div className='main-container'>
      <Header />
      <BannerIcons />
      <MainHeader />
    </div>
  )
}

export default App
