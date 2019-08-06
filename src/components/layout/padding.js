import React from 'react';

export class Padding extends React.Component{

    constructor (props) {
        super(props);
        this.children = props.children;
    }

    render(){
        return (
            <div 
                style={{
                    padding: this.props.padding,
                    flexGrow: this.props.flexGrow
                }}>
                {this.children}
            </div>
        );
    }
}