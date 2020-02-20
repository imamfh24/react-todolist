import React from 'react';
import PropTypes from 'prop-types'
//props merupakan sebuah objek yang berisi semua hal yang akan diinject ke komponen ini, hal yang pasti dimiliki semua komponen yaitu props children
const Paper = ({ children }) =>{
    return (
        <div className="container">
            <div className="frame">{children}</div>
        </div>
    )
}

Paper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Paper;