import React, {useState, useEffect, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiChevronRight, FiCheck } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Error, TaskContainer } from './styles';

import Loading from '../../components/Loading';

interface TasksProps {
  id: number;
  title: string;
  finished: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TasksProps[]>()
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [inputError, setInputError] = useState('')

  async function getTasks() {
    const { data } = await api.get('/tasks')
    setTasks([...data])
  }

  async function handleDeleteTask(id: number) {
    try {
      await api.delete(`/tasks/${id}`)
      getTasks()
    }
    catch(error){
      console.log(error)
    }
  }

  async function handleUpdateTask(id: number) {
    try {
      await api.patch(`/tasks/${id}`)
      getTasks()
    }
    catch(error){
      console.log(error)
    }
  }

  async function handleSubmitPost(event: FormEvent) {
    event.preventDefault()

    if(!newTaskTitle || !newTaskDescription){
      setInputError('Todos os campos precisam estar preenchidos')
      return
    }

    try {
      await api.post('/tasks', {
        title: newTaskTitle,
        description: newTaskDescription
      })

      getTasks()
      setNewTaskTitle('')
      setNewTaskDescription('')
      setInputError('')
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  if (!tasks) {
    return <Loading />
  }

  return (
    <Container hasError={Boolean(inputError)}>
      <form onSubmit={handleSubmitPost}>
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
        <button type="submit">Criar</button>
      </form>

      {inputError && <Error>{inputError}</Error>}

      <section>
        {tasks.map(task => (
          <TaskContainer key={task.id} finished={task.finished}>
           <button aria-label="Deletar tarefa" onClick={() => handleDeleteTask(task.id)}>
             <FiTrash2 color="#fff" size={20}/>
           </button>
           {task.finished || (
            <button aria-label="Finalizar Tarefa" onClick={() => handleUpdateTask(task.id)}>
             <FiCheck color="#fff" size={20}/>
            </button>
           )}
           <Link to={`task/${task.id}`}>
            <p>{task.title}</p>
             <FiChevronRight color="#000" size={20}/>
           </Link>
         </TaskContainer>
        ))}
      </section>
    </Container>
  );
}

export default Home;