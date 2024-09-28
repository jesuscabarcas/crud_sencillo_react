import React, { useState } from 'react';

function TaskForm({ addTask }) {
  // Estado para manejar el texto de la nueva tarea
  const [taskText, setTaskText] = useState('');
  const [envio, setEnvio] = useState('');
  
  // Función que se ejecuta cuando el formulario es enviado
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene la recarga de la página
    if (taskText.trim() !== ''&&envio=='agregar') {  // Asegura que la tarea no esté vacía
      addTask(taskText);  // Llama a la función del componente padre (App) para agregar la tarea
      setTaskText('');  // Limpia el campo de texto
    }else if (taskText.trim() !== ''&&envio=='actualizar'){
      setTaskText(taskText);

    }
  };

  return (
    <form onSubmit={handleSubmit} id='miform'>
      <input
        type="text"
        id='texto'
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}  // Actualiza el estado al escribir en el input
      />
      <button class="bottonEActualizar" type="submit" value="agregar" onClick={(e)=>setEnvio(e.target.value)}>Agregar</button>
    </form>
  );
} 

export default TaskForm;
