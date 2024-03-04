import { Suspense, lazy, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
const Dashboard = lazy(()=>import('./components/Dashboard'));
const Landing = lazy(()=>import('./components/Landing'));

function App() {
  const [count, setCount] = useState(0)
  // const navigate = useNavigate()
  return (
    <div>
      {/* <div>
        <button onClick={()=>{
          // window.location.href= '/dashboard'
          // navigate("dashboard/dashboard")
        }}>Dashboard</button>
        <button onClick={()=>{
          // window.location.href= '/'
          // navigate('/')
        }}>Landing</button>
      </div> */}
      <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback="loading..." ><Dashboard></Dashboard></Suspense>}></Route>
        <Route path='/' element={<Suspense fallback={"loading..."} ><Landing></Landing></Suspense>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
function AppBar(){
  const navigate = useNavigate();
  return(
      <div>
        <button onClick={()=>{
          // window.location.href= '/dashboard'
          navigate("dashboard")
        }}>Dashboard</button>
        <button onClick={()=>{
          // window.location.href= '/'
          navigate('/')
        }}>Landing</button>
      </div>
  )
}

export default App
