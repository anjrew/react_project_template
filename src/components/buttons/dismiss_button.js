import React from 'react';

export class LinkButton extends React.Component{

    constructor (props) {
        super(props);
        this.handleClick = props.handleClick;
        this.label = props.label;
    }

    render(){
        return (
            <button className={'link-button'}  onClick={this.handleClick}>{this.label}</button>
        );
    }
}