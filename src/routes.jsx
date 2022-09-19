import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Dashboard from './pages/Dashboard'
import PrivilegedUsers from './pages/PrivilegedUsers'

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="/privileged-users" element={<PrivilegedUsers />} />
    </Routes>
  )
}
