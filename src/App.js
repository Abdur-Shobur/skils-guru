import { RouterProvider } from 'react-router-dom'
import AuthContext from './contextApi/AuthContext'
import UseCourses from './contextApi/UseCourses'
import { routes } from './routes/AllRoutes'

function App() {
  return (
    <UseCourses>
      <AuthContext>
        <RouterProvider router={routes} />
      </AuthContext>
    </UseCourses>
  )
}

export default App
