
import { useParams } from 'react-router-dom'
import Book from '../components/Book'
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { useNavigate } from 'react-router-dom';

function BookPage() {

  let {id} = useParams()
  const navigate = useNavigate();


  return (
    // <Markdown remarkPlugins={[[remarkGfm]]}>{markdown}</Markdown>
    <>
    <div style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
      <br />
      <div style={{display:'flex' ,gap:'14px'}}>
        <Book img='https://img.wattpad.com/cover/313739483-256-k577904.jpg' />
        <div style={{display:'flex', gap:'5px', flexDirection:"column"}}>
          <h1 style={{margin:'0'}}>This is the Title</h1>
          <Skeleton className="mb-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
          <Skeleton height="2rem" className="mb-2"></Skeleton>
          <Skeleton width="10rem" height="4rem"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
          
          <Button onClick={()=>navigate('/read/test/1')} label="Read" severity="success" />
        </div>
      </div>
      <hr style={{width:"60%", boxShadow: '0 0 16px 2px rgba(0, 0, 0, 0.9); ' }} />
      <p>id is: {id}</p>

    </div>
    </>
  )
}

export default BookPage