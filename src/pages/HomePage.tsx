import Book from "../components/Book"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    
    <main style={{maxWidth:'1300px', margin:'auto', padding:'10px'}}>

    <h3>You'll Like it</h3>
    <div style={{display:'flex', overflowX:'scroll', gap:'15px', scrollbarWidth:'none'}}>
      <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/313739483-256-k577904.jpg' tags={["Fan Fiction", "Dark"]}/>
      </Link>
    <Link to="/book/test">
    </Link>
    <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/251948264-256-k513244.jpg' tags={["Fan Fiction", "Dark"]}/>
    </Link>
    <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/362219749-256-k525210.jpg' tags={["Fan Fiction", "Dark"]}/>
    </Link>
    <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/105872-256-k921587.jpg' tags={["Fan Fiction", "Dark"]}/>
    </Link>
    <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/369058684-256-k52894.jpg' tags={["Fan Fiction", "Dark"]}/>
    </Link>
    <Link to="/book/test">
    <Book img='https://img.wattpad.com/cover/362219749-256-k525210.jpg' tags={["Fan Fiction", "Dark"]}/>
    </Link>
    </div>

    <br />
    <br />

    <h3>Trending Now &#x2197;</h3>
    <div style={{display:'flex', overflowX:'scroll', gap:'15px', scrollbarWidth:'none'}}>
    <Book img='https://img.wattpad.com/cover/313739483-256-k577904.jpg' tags={["Fan Fiction", "Dark"]}/>
    <Book img='https://img.wattpad.com/cover/251948264-256-k513244.jpg' tags={["Fan Fiction", "Dark"]}/>
    <Book img='https://img.wattpad.com/cover/362219749-256-k525210.jpg' tags={["Fan Fiction", "Dark"]}/>
    <Book img='https://img.wattpad.com/cover/105872-256-k921587.jpg' tags={["Fan Fiction", "Dark"]}/>
    <Book img='https://img.wattpad.com/cover/369058684-256-k52894.jpg' tags={["Fan Fiction", "Dark"]}/>
    <Book img='https://img.wattpad.com/cover/362219749-256-k525210.jpg' tags={["Fan Fiction", "Dark"]}/>
    </div>

    <br /><br />

    </main>
  )
}

export default HomePage