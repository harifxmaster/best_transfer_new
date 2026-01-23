import React from 'react'
import {Routes,Route} from "react-router-dom"
import Landingpage from "./Landingpage.jsx"
import PaymentsPage from './Paymentspage.jsx'
import SignIn from './Signinpage.jsx'
import Signup from './Signuppage.jsx'
import Termsandconditions from './Termsandconditions.jsx'
import Privacystatement from './Privacystatement.jsx'


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/payments/:type' element={<PaymentsPage />}/>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/privacy-policy' element={<Privacystatement />}/>
        <Route path='/terms-and-conditions' element={<Termsandconditions />} />
      </Routes>
  )
}

export default App