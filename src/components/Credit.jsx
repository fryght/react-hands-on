import React from 'react'

const Credit = ({credit}) => {
    let creditClass = 'credit';
    if (credit > 0) { creditClass = 'credit positive';}
    if (credit < 0) { creditClass = 'credit negative';}
    return(
        <div className={creditClass}>{credit} euro</div>
    )
}

export default Credit