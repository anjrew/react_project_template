import React from 'react';
import { connect } from 'react-redux';
import { Action as action } from '../react_utils/redux/actions';

// Components


// PAGES

class App extends React.Component{

    constructor(){
        super();
        
    }

    render(){
        
		
        return ( 
            <div style={{ maxHeight: '100vh'}}>
                
            </div>
        );
    }

    componentDidMount() {
        
    }
}

const mapStateToProps = state => {

    return {
        
    };
};

export default connect(mapStateToProps)(App);

