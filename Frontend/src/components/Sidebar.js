import React from "react";
import { CDBIcon, CDBSidebar, CDBSidebarContent, CDBSidebarMenu } from "cdbreact";

const Sidebar = () => {
    return (
        <div className="i-sidemenu">
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
                  href="https://www.facebook.com/groups/inspiroschools/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CDBIcon
                    className="service__icon"
                    fab
                    icon="facebook"
                    size="2x"
                  />
                </a>
                <a
                  href="https://wa.me/9345813146"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CDBIcon
                    className="service__icon"
                    fab
                    icon="whatsapp"
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.instagram.com/inspiroias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CDBIcon
                    className="service__icon"
                    fab
                    icon="instagram"
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@InspiroIASKAS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CDBIcon className="service__icon" fab icon="youtube" size="2x" />
                </a>
                <a
                  href="https://twitter.com/inspiroiaskas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CDBIcon className="service__icon" fab icon="twitter" size="2x" />
                </a>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      );
}
export default Sidebar;