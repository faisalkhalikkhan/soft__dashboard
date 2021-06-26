import { BusinessCenterOutlined, EventAvailable, ExitToApp, Folder, Home, InsertChart, InsertComment, PeopleOutlineOutlined, Person, Settings } from '@material-ui/icons'


import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Person />
            </div>
            <div className="sidebar__middle">
                <div className="active__btn">
                    <Home />
                </div>
                <div className="sidebar__btn">
                    <InsertChart />
                </div>
                <div className="sidebar__btn">
                    <BusinessCenterOutlined />
                </div>
                <div className="sidebar__btn">
                    <Folder />
                </div>
                <div className="sidebar__btn">
                    <EventAvailable />
                </div>
                <div className="sidebar__btn">
                    <PeopleOutlineOutlined />
                </div>
                <div className="sidebar__btn">
                    <InsertComment />
                </div>
                <div className="sidebar__btn">
                    <ExitToApp />
                </div>
            </div>
            <div className="sidebar__end">
                <div className="sidebar__btn">
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
