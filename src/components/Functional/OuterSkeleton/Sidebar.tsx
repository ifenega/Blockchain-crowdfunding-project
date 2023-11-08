import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


type SidebarItems = "Activity" | "Donations" | "Fundraisers" | "Settings"
type SidebarMenuProps = {
    name: SidebarItems;
    link: string;
    disabled: boolean
}[]

const Sidebar = () => {


    // <---------- Utility class --------->
    const mountedRef = useRef(true);
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    useEffect(() => {
        if (mountedRef) {
            const temp = sessionStorage.getItem("currentTab")
            if (temp) {
                setCurrentTab(temp)
            }
        }
        return () => {
            mountedRef.current = false;
        };
    }, []);
    // <---------- useStates + variables ---------->

    const sidebarMenu: SidebarMenuProps = [
        // {
        //     name: "Activity",
        //     link: "/activity",
        //     disabled: true
        // },
        {
            name: "Donations",
            link: "/donations",
            disabled: false
        },
        {
            name: "Fundraisers",
            link: "/fundraisers",
            disabled: false
        },
        {
            name: "Settings",
            link: "/settings",
            disabled: false
        },
    ]
    const [currentTab, setCurrentTab] = useState<string>('Donations')
    // <---------- Functions ---------->
    const drawerToggle = (section: SidebarItems) => {
        sessionStorage.setItem("currentTab", section)
        setCurrentTab(section)
    };


    return (
        <div className='mt-12 mr-12 ml-10 flex flex-col gap-4 border-l border-[EAECF0] h-fit'>

            {
                sidebarMenu.map((sidebarItems, index) => (
                    <SidebarComponent
                        key={index}
                        currentTab={currentTab}
                        name={sidebarItems.name}
                        link={sidebarItems.link}
                        disabled={sidebarItems.disabled}
                        drawerToggle={drawerToggle}
                    />
                ))
            }
        </div>
    )
}

export default Sidebar

interface ComponentProps {
    name: SidebarItems;
    link: string;
    disabled: boolean;
    currentTab: string
    drawerToggle: (section: SidebarItems) => void
}
const SidebarComponent = (props: ComponentProps) => {

    const navigate = useNavigate()

    return (
        <button
            type='button'
            disabled={props.disabled}
            onClick={() => {
                props.drawerToggle(props.name)
                navigate(props.link)
            }}
            className={`${props.name === props.currentTab ? "  text-primary/600" : " text-gray/600 "} font-medium px-2 capitalize text-left relative`}
        >
            {props.name === props.currentTab && <div className='h-full border-l border-primary/600 absolute left-[-1px]'></div>}
            {props.name}
        </button>
    )
}