import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import History from './Pages/History'
import Authentication from './Pages/Authentication'
import challenge from './Pages/challenge'
import Layout from './Components/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in/*' Component={Authentication} />
          <Route path='/login' Component={Authentication} />
          <Route element={<Layout />}>
            <Route path='/' Component={challenge} />
            <Route path='/history' Component={History} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
