
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
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Toast} from 'primereact/toast'

export default function Nav() {
    const items: MenuItem[] = [
        {
            label: 'Browse',
            icon: 'pi pi-box', // Changed icon to be more relevant to genres
            items: [
                [ // Row 1
                    {
                        label: 'Popular Fiction',
                        items: [
                            { label: 'Romance' },
                            { label: 'Fanfiction' },
                            { label: 'Fantasy' },
                            { label: 'Werewolf' },
                            { label: 'Teen Fiction' },
                            { label: 'New Adult' }
                        ]
                    }
                ],
                [ // Row 2
                    {
                        label: 'Specific Genres',
                        items: [
                            { label: 'Historical Fiction' },
                            { label: 'Paranormal' },
                            { label: 'Science Fiction' },
                            { label: 'Mystery' },
                            { label: 'Thriller' },
                            { label: 'Horror' }
                        ]
                    },
                ],
                [
                    {
                        label: 'Format & Style',
                        items: [
                            { label: 'Short Story' },
                            { label: 'Poetry' },
                            { label: 'Contemporary Lit' },
                            { label: 'Adventure' },
                            { label: 'Humor' }
                        ]
                    }

                ],
                [ // Row 3
                    {
                        label: 'Community',
                        items: [
                            { label: 'LGBTQ+' },
                            { label: 'Diverse Lit' },
                            { label: 'Non-Fiction' }
                        ]
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
    const navigate = useNavigate();
    const [cookie, setCookies, removeCookie] = useCookies(["access_token"]);
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);
    const show = () => {
        toast.current?.show({ severity: 'success', summary: 'Login Successful', detail: `Welcome ${localStorage.getItem('username')}!`, closable:false });
    };


    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            setLoading(true);
          axios.get(`https://gittpad-api.vercel.app/auth?code=${tokenResponse['access_token']}`).then((res)=>{
            setCookies('access_token', res.data.token);
            localStorage.setItem('username', res.data.user.name)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('image', res.data.user.image)
            setLoading(false);
            show();
          }).catch((err)=>{
            console.error(err);
          })
        },
      });


      const loginItems: MenuItem[] = [
        {
            style: {padding:'0'},
            items: [
                {
                    label: 'My Profile',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-user'
                },
                {
                    label: 'My Books',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-book'
                },
                {
                    label: 'Bookmarks',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-bookmark'
                },
                {
                    label: 'Settings',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-cog'
                },
                {
                    separator: true,
                    style: {height:'1px', padding:'0', background:'lightgrey'},
                    disabled:true,
                },
                {
                    label: 'Log Out',
                    style: {'fontSize':"12px"},
                    icon: 'pi pi-sign-out',
                    command(event) {
                        event.originalEvent.type === 'click' && removeCookie("access_token")
                        window.location.reload();
                    },
                },
            ]
        }
    ];

    const menuRight = useRef<Menu>(null);

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 824px)'})

    const start = <div style={{display:"flex", alignItems:"center"}}>
        <Link to={"/#"}>
        <img width={30} height={30} src='img/gittpad.png' />
        </Link>
        <span style={{width:"8px", height:"20px", display:"block"}}></span>
    </div> 

    const end = <div style={{display: "flex", alignItems:"center", gap: '10px'}}>
        <Button label={isDesktopOrLaptop ? "Create" : ""} onClick={()=>navigate('/new')} icon="pi pi-plus" severity="success"  text size='small' />
        {isDesktopOrLaptop && <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto p-inputtext-sm" />}

        {isDesktopOrLaptop || <Button severity="secondary" icon="pi pi-search" text size="small"/>}
        {!cookie.access_token ? <Button label={isDesktopOrLaptop?"Enter":""} onClick={()=>login()} loading={loading} severity="secondary" icon="pi pi-sign-in" text size="small"/>: 
        
        <>
        <Menu model={loginItems} style={{paddingBlock: '5px'}} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
        <Avatar image={localStorage.getItem('image') || ""} onClick={(event) => menuRight.current?.toggle(event)} shape="circle" aria-controls="popup_menu_right" aria-haspopup />
        </>
        }
    </div>
    
    return (
        <div className="card">
            <Toast ref={toast} position='top-center'/>

            <MegaMenu model={items} start={start} end={end}  orientation="horizontal" breakpoint="960px" />
        </div>
    )
}
        