import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import { Button } from 'primereact/button';
import {Avatar} from 'primereact/avatar';

function ReadPage() {

    let {bookid, page} = useParams();

    const markdown = `"I'd assume you've gotten everything sorted out?" questioned Blayze.

"Yes, Mr. Norman," Mr. James reassured, handing over the paper folder.

"That's good to hear. It's good to know you take your work seriously, and ideas on a solution?" asked Blayze as he flipped through the pages.

"Well sir, I do not believe the Carter family can pay us back anytime soon, with their sales versus their spending with personal matters, I don't believe that we can get even a reasonable fraction of our money back any time in the near, or distant future."

"Mr. James, what exactly are you saying? That we've just lost ten million dollars to our highest, advancing competitors? What could you possibly have in mind?"

"Well since, money isn't currently available, we'll have to go with non-price factors." Mr. James trailed off, suddenly feeling unsure about his idea.

"Yes, Mr. James go on," urged Blayze, suddenly interested in what could possibly amount to ten million dollars.

"Well, you see Mr. Carter has two daughters. When kingdoms have financial troubles, there will be a kind of agreement to join hands to strength the bonds between them. A marriage to be precise, prosperity would reign and their troubles would fix...." Mr. James recollected.

"Are you suggesting a marriage between I and one of Carter's daughters?" Blayze asked with a cool demeanour, catching on quite fast.

"The youngest is still in high school but his eldest is a beacon for the press. Not only will our company be shown in a more positive light than ever but also, when her father passes, you will be in part ownership of the inheritance. This can include a partial ownership of their business and more than the money they owe. Thereafter, you can do whatever suits you with the company plus you get to avoid having to pass through the strenuous court process of claiming back your money." Mr. James ended with an intake of breath. It was a last minute idea and there were no other options. Blayze wore a mask, and under it was the layer of questions: Is this really a beneficial fix? Is it even a viable solution?`
  return (
    <div>
    <center>
        <h1 style={{margin:'0', paddingTop:'10px'}}>Book: The Book of the Era {bookid} {page}</h1>
        <p style={{marginTop:'0', color:"grey"}}> - quazar joseph</p>
    <hr />
    </center>
    <div style={{display:'flex', maxWidth:'1000px', margin:'auto'}}>

        <div style={{position:'sticky', top:'20px', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px'}}>
            <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
            By - quazar joseph
        </div>


            <div style={{maxWidth:'700px', marginLeft:'2rem', padding:'10px', fontFamily:'"EB Garamond", serif', fontSize:'larger', background:'#ede6d4', paddingInline:'60px'}}><Markdown remarkPlugins={[[remarkGfm]]}>{markdown}</Markdown>
            <hr />
            <Button style={{width:"100%", background:'#6d685b', color:"white"}} label="Continue to next part" text rounded />
        </div>
    </div>

    </div>
  )
}

export default ReadPage