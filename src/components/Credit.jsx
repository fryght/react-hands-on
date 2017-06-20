import React from 'react';
import {connect} from 'react-redux';

import {addPayment} from '../actions/credit';

const Credit = ({id, credit, handlePayment}) => {
    let creditClass = 'credit';
    if (credit > 0) { creditClass = 'credit positive';}
    if (credit < 0) { creditClass = 'credit negative';}
    return(
        <div>
            <div className={creditClass}>{credit} euro</div>
            <button onClick={handlePayment}>Pay 5 euro</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlePayment: event => {
            dispatch(addPayment(ownProps.id, 5))
        }
    }
}

export default connect(null, mapDispatchToProps)(Credit)
