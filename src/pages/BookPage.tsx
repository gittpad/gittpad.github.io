import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function BookPage() {

    const markdown = `# A demo of 

 is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview


## Contents

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:


## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)`

  return (
    <Markdown remarkPlugins={[[remarkGfm]]}>{markdown}</Markdown>
  )
}

export default BookPage