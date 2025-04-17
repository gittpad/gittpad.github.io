
import { ReactNode } from "react"

interface Props {
    children : ReactNode
}

function Tag(props: Props) {
  return (
    <div style={{background: "darkgrey", borderRadius:"100vw", padding:'4px 10px', fontSize:"smaller"}}>{props.children}</div>
  )
}

export default Tag