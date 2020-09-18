import React, {useState, useEffect, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Error } from './styles';

interface TasksProps {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [inputError, setInputError] = useState('')

  async function getTasks() {
    const response = await api.get('/tasks')
    const data = response.data
    console.log(data)
    setTasks([...data])
  }

  useEffect(() => {
    getTasks()
  }, [])

  function handleSubmitPost(event: FormEvent) {
    event.preventDefault()

    if(!newTaskTitle || !newTaskDescription){
      setInputError('Todos os campos precisam estar preenchidos')
      return
    }

    try {
      api.post('/tasks', {
        title: newTaskTitle,
        description: newTaskDescription
      }).then(() => getTasks())

      setNewTaskTitle('')
      setNewTaskDescription('')
      setInputError('')
    }
    catch(error) {
      console.log(error)
    }
  }
  return (
    <Container hasError={Boolean(inputError)}>
      <form onSubmit={handleSubmitPost}>
        <input 
          placeholder="O que devo fazer ?" 
          type="text"
          value={newTaskTitle}
          onChange={event => setNewTaskTitle(event.target.value)}
        />
        <textarea 
          placeholder="Descrição" 
          name="description"
          value={newTaskDescription}
          onChange={event => setNewTaskDescription(event.target.value)}
        />
        <button type="submit">Criar</button>
      </form>

      {inputError && <Error>{inputError}</Error>}

      <section>
        {tasks.map(task => (
          <div>
           <button>
             <FiTrash2 color="#fff" size={25}/>
           </button>
           <Link to={`task/${task.id}`}>
            <p>{task.title}</p>
             <FiChevronRight color="#000" size={25}/>
           </Link>
         </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;