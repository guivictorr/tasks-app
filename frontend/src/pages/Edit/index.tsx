import React, { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container, Error } from './styles';

interface RouteParamsProps {
  id: string;
}

const Edit: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [inputError, setInputError] = useState('')
  const { id } = useParams<RouteParamsProps>()
  const { goBack } = useHistory()

  function handleEditTask(event: FormEvent) {
    event.preventDefault()

    if(!newTaskTitle || !newTaskDescription){
      setInputError('Todos os campos precisam estar preenchidos')
      return
    }

    try {
      api.put(`/tasks/${id}`, {
        title: newTaskTitle,
        description: newTaskDescription
      })

      setNewTaskTitle('')
      setNewTaskDescription('')
      setInputError('')
      goBack()
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <Container hasError={Boolean(inputError)}>
      <form onSubmit={handleEditTask}>
        <label htmlFor="title">Título</label>
        <input 
          placeholder="O que devo fazer ?"
          id="title" 
          type="text"
          value={newTaskTitle}
          onChange={event => setNewTaskTitle(event.target.value)}
        />
        <label htmlFor="description">Descrição</label>
        <textarea 
          placeholder="Descrição" 
          id="description"
          value={newTaskDescription}
          onChange={event => setNewTaskDescription(event.target.value)}
        />
        <button type="submit">Editar</button>
      </form>

      {inputError && <Error>{inputError}</Error>}
    </Container>
  );
};

export default Edit;
