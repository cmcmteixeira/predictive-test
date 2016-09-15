import React from 'react'
import './Key.scss'
class Key extends React.Component{
    render() {
        return (
            <div className="pred-key" onClick={this.props.onClick}>
                <div>{this.props.number}</div>
                <div>{this.props.letters.join(',')}</div>
            </div>
        )
    }
}

Key.PropTypes = {
    number: React.PropTypes.number.isRequired,
    letters: React.PropTypes.array.required,
    onClick: React.PropTypes.func
};

export default Key