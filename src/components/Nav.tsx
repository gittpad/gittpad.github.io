
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export default function Nav() {
    const items: MenuItem[] = [
        {
            label: 'Browse',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                    {
                        label: 'Bathroom',
                        items: [{ label: 'Accessories' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                    }
                ],
                [
                    {
                        label: 'Office',
                        items: [{ label: 'Me Case' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                    }
                ]
            ]
        },
        {
            label: 'Community',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },
    ];

    const start = <div style={{display:"flex", alignItems:"center"}}>
        <img width={30} height={30} src='img/gittpad.png' />
        <span style={{width:"8px", height:"20px", display:"block"}}></span>
    </div> 

    const end = <div style={{display: "flex", alignItems:"center", gap: '10px'}}>
        <Button label="Create" icon="pi pi-plus" severity="success"  text size='small' />
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto p-inputtext-sm" />
        <Button label="Login" severity="secondary" text size="small"/>
        <Button label="Sign Up" severity="secondary" text size="small"/>
        {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
    </div>
    
    return (
        <div className="card">
            <MegaMenu model={items} start={start} end={end}  orientation="horizontal" breakpoint="960px" />
        </div>
    )
}
        