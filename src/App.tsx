import Nav from './components/Nav';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ReadPage from './pages/ReadPage';
import WritePage from './pages/WritePage';
import './App.css'
import CreateBookPage from './pages/CreateBookPage';

function App() {

  return (
    <div className='App'>

    <Router>
    <Nav  />  
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/new' element={<CreateBookPage/>}/>
        <Route path='/book/:id' element={<BookPage/>}/>
        <Route path='/read/:bookid/:page' element={<ReadPage/>}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App
