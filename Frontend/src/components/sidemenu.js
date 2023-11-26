import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon
} from 'cdbreact';
import { useNavigate } from 'react-router-dom';

// const hoverFunction = (porps)=> {        
//     let sidemenu = document.querySelector('.sidemenu-hover');
//     if(porps === "addclass"){
//         sidemenu.classList.add("toggled")
//         sidemenu.classList.remove("sidemenu-hovered");
//     }
//     else{
//         sidemenu.classList.remove("toggled");
//         sidemenu.classList.add("sidemenu-hovered");
//     }
    
// }
const socialLinks = [
    { platform: "Facebook", link: "https://www.facebook.com/yourpage" }, 
    { platform: "WhatsApp", link: "https://wa.me/9345813146" }, // Replace with your actual WhatsApp number
    // Replace with your actual Facebook page URL
    { platform: "Instagram", link: "https://www.instagram.com/yourusername" }, // Replace with your actual Instagram username
    { platform: "YouTube", link: "https://www.youtube.com/yourchannel" }, // Replace with your actual YouTube channel URL
    { platform: "Twitter", link: "https://twitter.com/yourhandle" }, // Replace with your actual Twitter handle
  ];
const Sidebar = (props) => {
  const navigate = useNavigate();
const sideBarOnClick = (e)=>{
  console.log("oct2 sideBarOnClick e",e)
  //get id and passed to navigate property

  //if route is already home page scroll upto top if not change route to home
  //if clickable event id is service   change route to service
  //if clickable event id is speciality   change route to speciality
   //if route is already home page scroll upto bottom if not change route to home and scroll to bottom

  // avigate('/home')
}
  return (
    <div className='i-sidemenu'>
      <CDBSidebar 
        textColor="#fff" 
        backgroundColor="transparent"
        className="sidemenu-hover toggled"
        // onMouseEnter={()=>{hoverFunction ("removeclass")}}
        // onMouseLeave={()=>{hoverFunction ("addclass")}}
        >
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
                <a 
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"><CDBIcon className='service__icon'  fab icon="facebook" size="2x"/></a>
            <a  href="https://wa.me/9345813146"
            target="_blank"
            rel="noopener noreferrer"><CDBIcon className='service__icon'  fab icon="whatsapp" size="2x" /></a>
            <a  href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"><CDBIcon className='service__icon' fab icon="instagram" size="2x"/></a>
            <a href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"><CDBIcon className='service__icon' fab icon="youtube" size="2x" /></a>
            <a href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"><CDBIcon className='service__icon' fab icon="twitter" size="2x" /></a>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;