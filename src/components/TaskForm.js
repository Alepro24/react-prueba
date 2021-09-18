import React, {Component} from 'react';

export default class TaskForm extends Component{
    
    state = {
        title: '',
        description: ''
    }
    
    //Metodo para que no se refresque la pagina cada rato
    onSubmit = (e) => {
        
        e.preventDefault();
    }
    onChange = (e) => {
        //alert(e.target.value) //Para ver el valor de los inputs o textarea con cada cambio
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Escribe una tarea" onChange={this.onChange} value={this.state.title} ></input>
                <br/>
                <textarea name="description" placeholder="Escribe una descripción" onChange={this.onChange} value={this.state.description}></textarea>
                <br/>
                <input type="submit"/>
            </form>
        );
    }
}

