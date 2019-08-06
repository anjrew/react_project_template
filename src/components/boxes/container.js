import React from 'react';

export default class Container extends React.Component{


    render(){
        return (
            <div 
                id={this.props.id}
                className='Container' 
                style={{
                    flexGrow: this.props.flexGrow,
                    display: this.props.display || 'flex',
                    flexDirection: this.props.flexDirection || 'column',
                    justifyContent: this.props.justifyContent || 'center',
                    alignItems: this.props.alignItems || 'center',
                    alignContent: this.props.alignContent || 'center',
                    alignSelf: this.props.alignSelf || 'center',
                    borderRadius: this.props.borderRadius,
                    borderWidth: this.props.borderWidth,
                    borderColor: this.props.borderColor,
                    borderStyle: this.props.borderStyle,
                    height: this.props.height,
                    width: this.props.width,
                    padding: this.props.padding,
                    maxWidth: this.props.maxWidth,
                    margin: this.props.margin,
                    boxShadow: this.props.boxShadow && "1px 0px 3px 1px rgba(0,0,0,0.75)",
                    backgroundColor: this.props.backgroundColor,
                    position: this.props.position,
                    opacity: this.props.opacity,
                    top: this.props.top,
                    zIndex: this.props.zIndex,
                    placeContent: this.props.placeContent
                }}
                onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}