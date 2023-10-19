import './App.css'
import Users from './component/Users'
import { RouterProvider } from 'react-router-dom'
import { router } from './component/router'



function App() {



  return (
    <RouterProvider router={router} />

  )
}

export default App
