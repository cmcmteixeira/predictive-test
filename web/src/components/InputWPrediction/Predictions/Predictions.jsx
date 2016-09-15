import React from 'react'
import _ from 'lodash'
import {ListGroup,ListGroupItem} from 'react-bootstrap'
import {connect} from 'react-redux';

import {selectWord}from '../../../actions/action.jsx'
class Predictions extends React.Component {
    onClick(word){
        this.props.dispatch(selectWord(word))
    }

    render(){
        const predictions = _.map(this.props.predictions,(word) => {
            return <ListGroupItem key={word} onClick={this.onClick.bind(this,word)}>{word}</ListGroupItem>
        });

        return(
            <ListGroup>
                {predictions}
            </ListGroup>
        )
    }
}

Predictions.PropTypes = {
    dispatch: React.PropTypes.func,
    predictions: React.PropTypes.array
};

Predictions = connect((state = {}) => state)(Predictions);


export default Predictions