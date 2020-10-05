import React, { Component } from 'react'
import '../css/twocolumn.css'

interface TwoColumnProps{
    info1: any;
    info2: any;
}

class TwoColumn extends Component<TwoColumnProps> {

    render(){
        return (
            <div className="row">
                <div className="column">{this.props.info1}</div>
                <div className="column">{this.props.info2}</div>
            </div>
        )
    }
}

export default TwoColumn;