import Tag from "./Tag"

function Book() {

  return (
    <div style={{display: 'flex', flexDirection:"column"}}>
        <img src="https://img.wattpad.com/cover/313739483-256-k577904.jpg" width={200} alt="" />
        <div style={{overflowX:'scroll', width:'200px', display:'flex', gap:'4px', scrollbarWidth:"none"}}>
            <Tag>Value</Tag>
            <Tag>Dark</Tag>
        </div>
    </div>
  )
}

export default Book