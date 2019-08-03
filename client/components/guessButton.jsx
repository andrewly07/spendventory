import React from 'react';

class GuessButton extends React.Component{
    render(){
        return <button onClick={this.props.guessCheck}>Submit</button>
    }
}
export default GuessButton