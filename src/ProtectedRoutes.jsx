import {useAuth} from './Provider/AuthContext'
import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoutes = () => {
  const {loading, isAuthenticated} = useAuth()
  console.log(loading, isAuthenticated)
  
  if (loading) return <h1>Loading...</h1>
  
  if(!loading && !isAuthenticated) return <Navigate to='/adminLogin' replace/>
    return <Outlet />
}
