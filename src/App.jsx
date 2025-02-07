import { Routes, Route, Link } from 'react-router-dom'

import Blue from './Blue.jsx'
import Red from './Red.jsx'
import Home from './Home.jsx'

const App = () => {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/blue'>Blue</Link>
          <Link to='/red'>Red</Link>
        </div>
        
        <div id="main-section"> 
          <Routes>
            <Route path='/blue' element={ <Blue /> } />
            <Route path='/red' element={ <Red /> } />
            <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App