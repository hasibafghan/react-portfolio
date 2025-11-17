import './App.css'
import { Header } from './components/header/Header'
import { About } from './components/about/About'
import Services from './components/services/Services'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'


function App() {
  
  return(
    <>
    <Header></Header>
    <About></About>
    <Services></Services>
    <Blog></Blog>
    <Footer></Footer>
    </>
  )
}

export default App