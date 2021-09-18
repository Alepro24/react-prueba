import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends React.Component{
    render(){
        return(this.props.tasks.map(task => <Task tarea={task} key={task.id} />)
          )
    }
}

Task.propTypes = {
    tasks: PropTypes.array.isRequired
}


export default Tasks;