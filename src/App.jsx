import React from 'react'
import {Routes,Route} from "react-router-dom"
import Landingpage from "./Landingpage.jsx"
import PaymentsPage from './Paymentspage.jsx'
import SignIn from './Signinpage.jsx'
import Signup from './Signuppage.jsx'


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/payments/:type' element={<PaymentsPage />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
  )
}

export default App