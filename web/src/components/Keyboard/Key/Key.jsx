import React from 'react'
import {Button} from 'react-bootstrap'
import './Key.scss'
class Key extends React.Component{
    render() {
        return (
            <Button className="pred-key" bsStyle="primary" onClick={this.props.onClick} bsSize="large" block>
                <span>{this.props.number}</span><br/>
                <span>{this.props.letters.join(',')}</span>
            </Button>
        )
    }
}

Key.PropTypes = {
    number: React.PropTypes.number.isRequired,
    letters: React.PropTypes.array.required,
    onClick: React.PropTypes.func
};

export default Key