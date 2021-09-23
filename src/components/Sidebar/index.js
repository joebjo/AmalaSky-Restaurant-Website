import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu,SidebarLink,
SidebarRoute, SideBtnWrap} from './Sidebar-Elements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Amala and Ogufe</SidebarLink>
                <SidebarLink to="/">Amala and RoundAbout</SidebarLink>
                <SidebarLink to="/"> &rarr;Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
            <SidebarRoute to ='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
