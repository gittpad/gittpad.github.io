
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useCookies } from "react-cookie";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import { EnvironmentModuleGraph } from 'vite';

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

    const [cookie, setCookies, removeCookie] = useCookies(["access_token"]);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
          axios.get(`https://gittpad-api.vercel.app/auth?code=${tokenResponse['access_token']}`).then((res)=>{
            setCookies('access_token', res.data.token);
            localStorage.setItem('username', res.data.user.name)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('image', res.data.user.image)
            window.location.reload()
          }).catch((err)=>{
            console.error(err);
          })
        },
      });


      const loginItems: MenuItem[] = [
        {
            label: 'Options',
            style: {'fontSize':"smaller", padding:'10px'},
            items: [
                {
                    label: 'Log Out',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-sign-out',
                    command(event) {
                        event.originalEvent.type === 'click' && removeCookie("access_token")
                        window.location.reload();
                    },
                },
                {
                    label: 'Settings',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-cog'
                }
            ]
        }
    ];

    const menuRight = useRef<Menu>(null);

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 824px)'})
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const start = <div style={{display:"flex", alignItems:"center"}}>
        <Link to={"/#"}>
        <img width={30} height={30} src='img/gittpad.png' />
        </Link>
        <span style={{width:"8px", height:"20px", display:"block"}}></span>
    </div> 

    const end = <div style={{display: "flex", alignItems:"center", gap: '10px'}}>
        <Button label={isDesktopOrLaptop ? "Create" : ""} icon="pi pi-plus" severity="success"  text size='small' />
        {isDesktopOrLaptop && <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto p-inputtext-sm" />}

        {isDesktopOrLaptop || <Button severity="secondary" icon="pi pi-search" text size="small"/>}
        {!cookie.access_token ? <Button label={isDesktopOrLaptop?"Enter":""} onClick={()=>login()} severity="secondary" icon="pi pi-sign-in" text size="small"/>: 
        
        <>
        <Menu model={loginItems} style={{paddingBlock: '5px'}} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
        <Avatar image={localStorage.getItem('image') || ""} onClick={(event) => menuRight.current?.toggle(event)} shape="circle" aria-controls="popup_menu_right" aria-haspopup />
        </>
        }
    </div>
    
    return (
        <div className="card">
            <MegaMenu model={items} start={start} end={end}  orientation="horizontal" breakpoint="960px" />
        </div>
    )
}
        