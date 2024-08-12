
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header/Header.jsx'
import Feature from './components/Feature/Feature.jsx'
import Project from './components/Projects/Project.jsx'
import MyResume from './components/Resume/MyResume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Feature/>
      <Project/>
      <MyResume/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
