import '@mdxeditor/editor/style.css'
import { MDXEditor, MDXEditorMethods, thematicBreakPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button';
import {Avatar} from 'primereact/avatar';
import { useRef } from 'react'


function ReadPage() {
    const ref = useRef<MDXEditorMethods>(null)
    let {bookid, page} = useParams();
    const navigate = useNavigate();
    const markdown = `
# Markdown syntax guide

## Headers

# This is a Heading h1

## This is a Heading h2

###### This is a Heading h6

## Emphasis

*This text will be italic*
*This will also be italic*

**This text will be bold**
***This will also be bold***

*You **can** combine them*
`
  return (
    <div>
    <center>
        <h1 style={{margin:'0', paddingTop:'10px'}}>Book: The Book of the Era {bookid} {page}</h1>
        <p style={{marginTop:'0', color:"grey"}}> - quazar joseph</p>
    <hr />
    </center>
    <div style={{display:'flex', maxWidth:'1000px', margin:'auto'}}>

        <div style={{position:'sticky', top:'20px', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px'}}>
            <Avatar icon="pi pi-user" image='https://img.wattpad.com/useravatar/mismatchedsockslife.128.544955.jpg' size="xlarge" shape="circle" />
            <p>
            By - quazar joseph
            </p>
            <Button label="Follow" outlined icon='pi pi-user-plus' size="small" style={{fontSize:'smaller', padding:'6px 8px'}} severity="secondary" />

        </div>
            <div style={{maxWidth:'700px',flex:1, marginLeft:'2rem', padding:'10px', fontFamily:'"EB Garamond", serif', fontSize:'larger', background:'#ede6d4', paddingInline:'60px'}}><MDXEditor ref={ref} readOnly markdown={markdown} plugins={[headingsPlugin(), thematicBreakPlugin()]} />
            <hr />
            <Button onClick={()=>navigate(`/read/${bookid}/${Number(page)+1}`)} style={{width:"100%", background:'#6d685b', color:"white"}} label="Continue to next part" text rounded />
        </div>
    </div>
    <br />
    </div>
  )
}

export default ReadPage