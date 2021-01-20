import Footer from 'components/Footer/Footer'
import NavBar from 'components/NavBar/NavBar'
import VideoListContainer from 'containers/VideoListContainer'
import './App.scss'

const App = () => {
  return (
    <div>
      <NavBar />

      <VideoListContainer />

      <Footer />
    </div>
  )
}

export default App

//Prerequisito

// npm i sass react-ticker react-intersection-observer

// Componentes
// ProfileWidget                                        CartWidget
// Icon
// NavBar, Footer                                       NavBar
// VideoListContainer -> Fetch                          ItemListContainer
// VideoList -> map de los datos fetch                  ItemList
// Video (VideoFooter, VideoSideBar) -> Video           Item

// Relaciones

// App
// ✔️     NavBar
// ✔️    VideoListContainer
// ✔️         VideoList
// ✔️             Video
// ✔️                 ProfileWidget
// ✔️                 Icon
// ✔️     Footer
// ✔️         Icon

