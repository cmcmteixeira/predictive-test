import React from 'react'
import _ from 'lodash'
import {ListGroup,ListGroupItem} from 'react-bootstrap'

class Prediction extends React.Component {
    render(){
        const predictions = _.map(this.props.predictions,(elem) => {
            return <ListGroupItem key={elem}>{elem}</ListGroupItem>
        });

        return(
            <ListGroup>
                {predictions}
            </ListGroup>
        )
    }
}

export default Prediction