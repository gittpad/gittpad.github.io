import '@mdxeditor/editor/style.css'
import { MDXEditor, MDXEditorMethods, thematicBreakPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'
import { useRef } from 'react'

function WritePage() {

    const ref = useRef<MDXEditorMethods>(null)
    
const markdown = ``;
const placeholder = <p style={{color:'gray', fontStyle:'italic'}}>unleash your imagination...</p>


  return (
    <>
    <span style={{display:'block', height:'10px'}}></span>
    <button onClick={()=>{
        const data = ref.current?.getMarkdown() || "";
        console.log(data);  
        navigator.clipboard.writeText(data);
}}>Get markdown</button>
        <div style={{maxWidth:'700px', minHeight: "1000px",flex:1, margin:'auto', padding:'20px', fontFamily:'"EB Garamond", serif', fontSize:'larger', background:'#ede6d4', paddingInline:'40px'}}>

        <MDXEditor ref={ref} placeholder={placeholder} markdown={markdown} className='main-editor' plugins={[headingsPlugin(), thematicBreakPlugin(), toolbarPlugin({
            toolbarClassName: 'my-toolbar',
            toolbarContents: () => (
                <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          )
        })]} />
        </div>
        <br />
    </>
  )
}

export default WritePage