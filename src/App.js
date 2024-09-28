import React, { useState } from 'react';
import TaskList from './components/TaskList';  // Importa la lista de tareas
import TaskForm from './components/TaskForm';  // Importa el formulario para agregar tareas
import './css/styles.css'
function App() {
  // Estado para gestionar las tareas. Comienza con un array vacío.
  const [tasks, setTasks] = useState([]);

  // Función para agregar nuevas tareas
  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };  // Cada tarea tiene un texto y un estado de completada
    setTasks([...tasks, newTask]);  // Agrega la nueva tarea al estado
  };

  // Función para eliminar una tarea
  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);  // Filtra las tareas eliminando la seleccionada
    setTasks(newTasks);  // Actualiza el estado con las tareas restantes
  };

  // Función para eliminar una tarea
  const updateTask = (taskIndex,taskText) => {
    //console.log(taskIndex)
    var form =document.getElementById('miform');
    var texto = document.getElementById ('texto');
    
    const updatedItems = tasks.map((item, index) =>
    index === taskIndex ? { text: texto.value, completed: false } : item);
      
        if (texto.value.trim() !== ''){
          setTasks(updatedItems);
          form.reset()
        }
     
  };
  return (
    <div className="App">
      <table class='tablaCentrada'>
      <caption><h1>Lista de Tareas</h1></caption>
        <tr ><th class='centrarColumna'>Mis acciones</th>
        </tr>
        <tr>
          <td class='centrarColumna'>
      {/* Renderiza el formulario para agregar tareas */}
      <TaskForm addTask={addTask} />
      </td>
      </tr>
      <tr>
        <td class='centrarColumna'>
      {/* Renderiza la lista de tareas, pasándole las tareas y la función para eliminarlas */}
      <table class='tablaCentrada'>
      
    
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
       
        </table>
      
      </td>
      </tr>
     
    </table>
    </div>
  );
}

export default App;
