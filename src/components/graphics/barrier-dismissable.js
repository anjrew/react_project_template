/* eslint-disable indent */
import React from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import Container from '../../components/boxes/container';

export default class BarrierDismissable extends React.Component{

    render(){
        return (
			<CSSTransition 
				in={!!this.props.in} 
				timeout={400} 
				classNames="fade" 
				unmountOnExit>
				<Container 
					padding="40px"
					position="fixed"
					width='100vw'
					height='100vh'
					backgroundColor= 'rgba(0,0,0,0.30)'
					zIndex={this.props.zIndex || "10"}
					top='0px'
					left='0px'
					onClick={ () => {
						this.props.dismiss();
					}}
				>
				</Container>
			</CSSTransition>
        );
    }
}
