import React from 'react';
import PropTypes from 'prop-types';
//props adalah sebuah objek yang menerima apapun yang akan diberikan kedalam komponen ini
const Todo = props => {
    return(
            <div className="todo">
                <span className="todo-text">{props.text}</span>
            </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired
}

export default Todo;