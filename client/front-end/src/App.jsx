import './App.css'
import { CreateProjectsComponent } from './context/CreateProjects/CreateProjectsContext'
import {CreateTaskComponent} from "./context/TodoContext/TodoCreateTaks"
// import Layout from './router/Layout'
import { RoutersAuth } from './router/RoutersAuth'


function App() {

  return (
    <>
      <CreateProjectsComponent>
        <CreateTaskComponent>
          <RoutersAuth /> 
        </CreateTaskComponent>
        {/* <Layout /> */}
      </CreateProjectsComponent>
    </>
  )
}

export default App
