import React from 'react';

function Task({ task, index, deleteTask, updateTask }) {
  return (


    <tr>
      <td >{task.text}  {/* Muestra el texto de la tarea */}</td>
      <td><button class="bottonElimminar" onClick={() => deleteTask(index)}>Eliminar</button>  {/* Botón para eliminar la tarea */}
        <button class="botton" onClick={() => updateTask(index, task)}>Actualizar</button>  {/* Botón para eliminar la tarea */}</td>
    </tr>



  );
}

export default Task;
