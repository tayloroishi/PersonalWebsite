import React, { Component } from 'react';
import InfoRoutes from '../components/InfoRoutes';
import SideBar from '../components/SideBar';

function MainInfoPage() {
    return(
        <div>
            <SideBar />
            <InfoRoutes />
        </div>
    )
}

export default MainInfoPage;