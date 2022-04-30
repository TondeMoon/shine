import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NewPass from './pages/NewPass'
import LoginPage from './pages/Login'
import Layout from './pages/layout/Layout'
import Profile from './pages/Profile'
import Booking from './pages/Booking'
import StaysPage from './pages/Stays'
import MyHomes from './pages/MyHomes'
import OneHome from './pages/OneHome'
import OneStay from './pages/OneStay'
import ModifyOneStay from './pages/Modify'
import './App.css'

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<LoginPage />} path='/' />
          <Route element={<NewPass />} path='/newpass' />
          <Route path='demo'>
            <Route element={<Profile />} path='lk' />
            <Route element={<Booking />} path='book' />
            <Route path='stays'>
              <Route element={<StaysPage />} index />
              <Route element={<OneStay />} path=':stayId' />
              <Route path='modify'>
                <Route element={<ModifyOneStay />} path=':stayId' />
              </Route>
            </Route>
            <Route path='myhomes'>
              <Route element={<MyHomes />} index />
              <Route element={<OneHome />} path=':homeId' />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
