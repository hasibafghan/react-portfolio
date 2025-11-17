import './App.css'
import { Header } from './components/header/Header'
import { About } from './components/about/About'
import Services from './components/services/Services'
import Blog from './components/blog/Blog'


function App() {
  
  return(
    <>
    <Header></Header>
    <About></About>
    <Services></Services>
    <Blog></Blog>
    </>
  )
}

export default App