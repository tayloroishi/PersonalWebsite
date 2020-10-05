import React, { Component } from 'react';
import InfoRoutes from '../components/InfoRoutes';
import SideBar from '../components/SideBar';

function MainInfoPage() {
    return(
        <div className='mainbody'>
            <SideBar />
            <InfoRoutes />
        </div>
    )
}

export default MainInfoPage;