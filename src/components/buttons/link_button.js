import React from 'react';

export class LinkButton extends React.Component{

    constructor (props) {
        super(props);
        this.handleClick = props.handleClick;
        this.label = props.label;
    }

    render(){
        return (
            <button 
                className={'link-button'}  
                onClick={this.handleClick}
                style={{
                    color: this.props.color,
                    alignSelf: this.props.alignSelf
                }}
            >
                {this.label}{this.props.children}
				
            </button>
        );
    }
}