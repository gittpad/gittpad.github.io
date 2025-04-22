import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import {Chips, ChipsChangeEvent} from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { ToggleButton } from 'primereact/togglebutton';


function CreateBookPage() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [targetPeople, setTargetPeople] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [mature, setMature] = useState<boolean>(false);


    const categories = [
        { name: 'Romance' },
        { name: 'Fanfiction' },
        { name: 'LGBTQ+' },
        { name: 'Wattpad Originals' },
        { name: 'Werewolf' },
        { name: 'New Adult' },
        { name: 'Fantasy' },
        { name: 'Short Story' },
        { name: 'Teen Fiction' },
        { name: 'Historical Fiction' },
        { name: 'Paranormal' },
        { name: 'Editor\'s Picks' },
        { name: 'Humor' },
        { name: 'Horror' },
        { name: 'Contemporary Lit' },
        { name: 'Diverse Lit' },
        { name: 'Mystery' },
        { name: 'Thriller' },
        { name: 'Science Fiction' },
        { name: 'The Wattys' },
        { name: 'Adventure' },
        { name: 'Non-Fiction' },
        { name: 'Poetry' }
    ];

    const targetAudience = [
        {name: 'Young Adult (13-18 years of age)'},
        {name : 'New Adult (18-25 years of age)'},
        {name: 'Adult (25+ years of age)'}
    ]

    const optional = <span style={{color:'grey', fontStyle:'italic', fontSize:'smaller'}}>(optional)</span>;

    const panelFooterTemplate = () => {
        const length = selectedCategory ? selectedCategory.length : 0;

        return (
            <div className="py-2 px-3" style={{padding:'13px 12px'}}>
                {length == 3 ? <p><b>max</b> items selected.</p> :  <p><b>{length}</b> item{length > 1 ? 's' : ''} selected.</p>}
            </div>
        );
    };

  return (
    <div style={{display:'flex', marginBlock:'20px', maxWidth:'1000px', marginInline:'auto'}}>
        <div style={{position:'sticky', top:'20px', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px'}}>
            <img src="https://images.assetsdelivery.com/compings_v2/apoev/apoev1806/apoev180600175.jpg" style={{objectFit:'cover', border:'1px dashed'}} width={300} height={400} alt=""/>

        </div>
        <div style={{maxWidth:'700px',flex:1, marginLeft:'2rem'}}>
            <h1>Create a new story</h1>
            <hr />
            <p style={{color:'grey', fontStyle:'italic'}}>Required fields are marked with an asterisk (*).</p>
            <br />
            <h4 style={{marginBlock:'8px'}}>Title*</h4>
            <InputText value={title} placeholder='Untitled Story...' style={{maxWidth:'20rem', width:'100%'}} onChange={(e) => setTitle(e.target.value)} />
            <br /><br />
            <h4 style={{marginBlock:'8px'}}>Description {optional}</h4>
            <InputTextarea  value={description} style={{width:'100%'}} placeholder='Untitled Story...' rows={5} cols={40} onChange={(e) => setDescription(e.target.value)} />
            <br /><br />
            <hr />

            
            <h4 style={{marginBlock:'8px'}}>Category *</h4>
            <MultiSelect selectionLimit={3} style={{width:'100%'}} value={selectedCategory} options={categories} onChange={(e) => {console.log(e.value); setSelectedCategory(e.value)}} optionLabel="name" 
    placeholder="Select Countries" panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
            <br /><br />
            <h4 style={{marginTop:'8px'}}>Tags {optional}</h4>
            <p style={{color:'grey', fontStyle:'italic', fontSize:'smaller', marginBlock:'4px'}}>enter , separated values</p>
            <Chips value={tags} onChange={(e: ChipsChangeEvent) => setTags(e.value || [])} separator="," max={10}/>
            <br /><br />
            <hr />

            <h4 style={{marginBlock:'8px'}}>Target Audience {optional}</h4>
            <Dropdown value={targetPeople} onChange={(e) => setTargetPeople(e.value)} options={targetAudience} optionLabel="name" 
    placeholder="Select Target Audience" className="w-full md:w-14rem" />

            <br /><br />
            <h4 style={{marginBlock:'8px'}}>Rating *</h4>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <h3 style={{color:'grey'}}>Mature: </h3>
            <ToggleButton 
            checked={mature}
            pt={{
                box:{
                    style:{padding:'8px 12px', width:'6rem'}
                }
            
            }} 
            onChange={(e) => setMature(e.value)} />

            </div>
            <p style={{color:'grey', fontStyle:'italic'}}>Your story is appropriate for all audiences. The Wattpad community has the ability to rate your story Mature. For more info, please read Wattpad’s Content Guidelines: https://www.gittpad.com/guidelines</p>
            
        </div>
    </div>
  )
}

export default CreateBookPage