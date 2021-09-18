
import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types'; 

class Task extends Component{
    //Otra funcion  para cambiar estilos
    StyleCompleted() {
        return{
            fontSize: '20px',
            color: this.props.tarea.done ? 'gray' : 'black', //condicional if
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }
    
    
    render(){
        const {tarea} = this.props;
         // <p className="red"> </p>
        return(
            <p style={this.StyleCompleted()}> 
                {tarea.title} - 
                {tarea.description} - 
                {tarea.done} - 
                {tarea.id}
            <input type="checkbox"></input>
            <button style={btnDelete}>
                X
            </button>
            </p>
        )
    }
}

//Para validar el tipo de dato que espero de props
Task.propTypes = {
    tarea: PropTypes.object.isRequired
}
//Estilos en linea

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15 px',
    borderRadius: '50%',
    cursor: 'pointer',

}

export default Task;