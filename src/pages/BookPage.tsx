// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import Book from '../components/Book'

import { Skeleton } from 'primereact/skeleton';
        
function BookPage() {

  let {id} = useParams()
//     const markdown = `# A demo of 
    

//  is a markdown component for React. Page id is **${id}**

// 👉 Changes are re-rendered as you type.

// 👈 Try writing some markdown on the left.

// ## Overview


// ## Contents

// Pretty neat, eh?

// ## GitHub flavored markdown (GFM)

// For GFM, you can *also* use a plugin:

// ~~strikethrough~~

// * [ ] task list
// * [x] checked item

// https://example.com

// ## HTML in markdown

// <blockquote>
//   👆 Use the toggle above to add the plugin.
// </blockquote>

// ## Components

// You can pass components to change things:


// ## More info?

// Much more info is available in the
// [readme on GitHub](https://github.com/remarkjs/react-markdown)!

// ***

// A component by [Espen Hovlandsdal](https://espen.codes/)`

  return (
    // <Markdown remarkPlugins={[[remarkGfm]]}>{markdown}</Markdown>
    <>
    <div style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
      <br />
      <div style={{display:'flex' ,gap:'14px'}}>
        <Book img='https://img.wattpad.com/cover/313739483-256-k577904.jpg' />
        <div style={{display:'flex', gap:'5px', flexDirection:"column"}}>
          <h1>This is the Title</h1>
          <Skeleton className="mb-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
          <Skeleton height="2rem" className="mb-2"></Skeleton>
          <Skeleton width="10rem" height="4rem"></Skeleton>
          <Skeleton className="mb-2"></Skeleton>
          <Skeleton width="5rem" className="mb-2"></Skeleton>
        </div>
      </div>
      <p>id is: {id}</p>
    </div>
    </>
  )
}

export default BookPage