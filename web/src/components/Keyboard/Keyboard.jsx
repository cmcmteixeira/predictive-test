import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';


import Key from './Key/Key.jsx'
import {Grid,Col,Row,Button} from 'react-bootstrap'
import config from '../../config/config.js'
import {keyPressed,deleteChar} from '../../actions/action.jsx'

import './Keyboard.scss'


class Keyboard extends React.Component{


    onKeyClick(keyIndex){
        keyPressed(this.props.sequence,keyIndex).then((action) => {
            this.props.dispatch(action);
        })
    }

    onDelete(){
        deleteChar(this.props.sequence).then((action) => {
            this.props.dispatch(action);
        })
    }

    render(){
        const keys = _.chain(config.mappings)
            .zip(_.range(1,config.mappings.length+1))
            .map((keyIndex) => {
                const letters = keyIndex[0], index=keyIndex[1];
                return (
                    <Col key={index} xs={4}>
                        <Key letters={letters} number={index} onClick={this.onKeyClick.bind(this,index)}/>
                    </Col>
                )
            })
            .value();

        return (
            <div className="pred-keyboard">
                <Grid>
                    <Row>
                        {keys}
                    </Row>
                </Grid>
                <Button bsStyle="danger" className="pred-delete" onClick={this.onDelete.bind(this)}>Delete</Button>
            </div>
        )
    }
}
Keyboard.propTypes ={
    sequence : React.PropTypes.string
};


Keyboard = connect((state = {}) => state)(Keyboard);

export default Keyboard