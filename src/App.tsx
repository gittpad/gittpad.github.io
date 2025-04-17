import Nav from './components/Nav';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>

    <Router>
    <Nav  />  
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/books' element={<BookPage/>}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App
