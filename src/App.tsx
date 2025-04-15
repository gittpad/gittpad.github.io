import Nav from './components/Nav';
import Book from './components/Book'
        
function App() {

  return (
    <>
    <Nav  />  
    <main style={{maxWidth:'1300px', margin:'auto', padding:'10px'}}>

    <h3>You'll Like it</h3>
    <div style={{display:'flex', overflowX:'scroll', gap:'15px', scrollbarWidth:'none'}}>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />

    </div>
    </main>
    </> 
  )
}

export default App
