import '@mdxeditor/editor/style.css'
import { MDXEditor, MDXEditorMethods, thematicBreakPlugin, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'
import { useRef } from 'react'

function WritePage() {

    const ref = useRef<MDXEditorMethods>(null)
    
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
    <>
    <span style={{display:'block', height:'10px'}}></span>
    <button onClick={()=>console.log(ref.current?.getMarkdown())}>Get markdown</button>
    <MDXEditor ref={ref} markdown={markdown} plugins={[headingsPlugin(), thematicBreakPlugin(), toolbarPlugin({
          toolbarClassName: 'my-classname',
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          )
        })]} />
    </>
  )
}

export default WritePage