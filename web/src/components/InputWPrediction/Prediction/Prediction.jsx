import React from 'react'
import _ from 'lodash'

class Prediction extends React.Component {
    render(){
        const predictions = _.map(this.props.predictions,(elem) => {
            return <li key={elem}>{elem}</li>
        });

        return(
            <div>
                <ul>
                    {predictions}
                </ul>
            </div>
        )
    }
}

export default Prediction