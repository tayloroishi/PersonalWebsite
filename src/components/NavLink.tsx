import React, { Component } from 'react';
import '../css/main.css';

interface NavLinkProps {
    path: string;
    handleClick: CallableFunction;
    active: boolean;
    name: string;
}

class NavLink extends React.Component<NavLinkProps> {

    render() {
        return(
            <div>
                <button className={this.props.active ? 'navbuttonactive' : 'navbutton'} onClick={() => this.props.handleClick(this.props.path)} disabled={this.props.active}>
                    { this.props.name }
                </button>
            </div>
        )

    }
}

export default NavLink;