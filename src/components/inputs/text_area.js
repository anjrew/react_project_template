
import React from 'react';

export default class TextArea extends React.Component {

    render(){
        const props = this.props;
        return (
            <textarea
                style={{
                    padding: props.padding || '20px',
                    borderRadius: props.borderRadius || '10px',
                    width: props.width
                }}
                type='text'
                name= {props.name}
                value={props.value}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete || 'true'}
                onChange={e => props.handleChange(e)}
            />
        );
    }
}