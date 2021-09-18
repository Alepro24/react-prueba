
import React from 'react';
import './App.css';

import tasks from './sample/tasks.json';

//Importando los componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


//Componente Helloworld
/*function Helloworld(props) {
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}*/

//Componente Helloworld pero en clase
/*
class Helloworld extends React.Component {
  
  state={
    show: true
  }
  
  //metodo cambiar el show
  toggleShow = () => {
    
    this.setState({show: !this.state.show})
  }

  render () {
    if (this.state.show){
      return(
      <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Cambiar el estado de Show</button>
      </div>
      );
    }
    else {
      return( 
        <h1> No hay elementos 
          <button onClick={this.toggleShow}>Cambiar el estado de Show1</button>
        </h1>
      );
    }
    
  }
}
*/

//Funcion flecha del Componente (Porque se guarda la funcion dentro de la constante App)
/*
const aplicacion = () => <div> Este es mi componente: <Helloworld/> </div>
*/

//Clase con el componente 
/*
class app extends React.Component{
  render() {
    return(<div>Este es mi mi component <Helloworld/> </div>)
  }
}
*/

//Componente App

/* function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hola Ale" subtitle="loremp ipsum" /> 
      <Helloworld mytext="Hola mundo" subtitle="Componente 2" />
      <Helloworld mytext="Hola!!" subtitle="Componente 4" />
    </div>
  );
} */


class App extends React.Component {
  state = {
    tasks:tasks
  }

  //Para añadir tareas desde el form
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask] //Agregar un nuevo elemento al arreglo
    })
  }

  render() {
    return(
      <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
