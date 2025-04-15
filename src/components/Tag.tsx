import React from 'react'

interface Props {
    children : any[] | any,
}

function Tag(props: Props) {
  return (
    <div style={{background: "darkgrey", borderRadius:"100vw", padding:'4px 10px', fontSize:"smaller"}}>{props.children}</div>
  )
}

export default Tag