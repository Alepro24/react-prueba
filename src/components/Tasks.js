import React from 'react';
import Task from './Task';

class Tasks extends React.Component{
    render(){
        return(this.props.tasks.map(task => <Task tarea={task} key={task.id} />)
          )
    }
}



export default Tasks;