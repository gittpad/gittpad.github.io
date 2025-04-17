import Tag from "./Tag"

interface Props{
  img: string
  tags: string[]
}

function Book(props: Props) {

  return (
    <div style={{display: 'flex', flexDirection:"column", gap:"4px"}}>
        <img src={props.img} width={200} style={{borderRadius:"10px"}} alt="" />
        <div style={{overflowX:'scroll', width:'200px', display:'flex', gap:'4px', scrollbarWidth:"none"}}>
          {props.tags.map((item)=>{
            return <Tag>{item}</Tag>;
          })}
            {/* <Tag>Value</Tag>
            <Tag>Dark</Tag> */}
        </div>
    </div>
  )
}

export default Book