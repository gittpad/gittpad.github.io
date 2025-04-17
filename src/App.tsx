import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>

    <Router>
    <Nav  />  
      <Routes>
        <Route path='/gittpad' element={<HomePage/>}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App
