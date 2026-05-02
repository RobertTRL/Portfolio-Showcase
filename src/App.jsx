import { useState , useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import data from './data/db.json'
import ViewProjects from './components/ViewProjects'
import AddProjectsForm from './components/AddProjectsForm'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState(data.projects)
  const [formInput, setFormInput] = useState({
    title: '',
    description: ''
  })
  
  const warningMsg = useRef(null)
  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value})
  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput.title.trim() === '' || formInput.description.trim() === '') {
      warningMsg.current.classList.replace('hidden', 'warning')
      setTimeout(() => {
        warningMsg.current.classList.replace('warning', 'hidden')
      }, 3000)
    }else {
    const newProject = {
      id: projects.length + 1,
      title: formInput.title.toLowerCase().trim(),
      description: formInput.description.toLowerCase().trim(),
      imageUrl: projects[Math.floor(Math.random() * projects.length)].imageUrl
    }
    setProjects([...projects, newProject])
    setFormInput({
      title: '',
      description: ''
    })}

  }
  return (
    <>
    <Header />
    <Hero />
    <ViewProjects projects={projects} />
    <AddProjectsForm formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} warningMsg={warningMsg}/>
    </>
  )
}

export default App
