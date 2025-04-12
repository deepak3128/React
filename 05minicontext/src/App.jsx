import React from 'react';
import Login from './component/Login'
import Profile from './component/Profile'
import Contexprovider from './context/Contexprovider.jsx'

function App() {
  

  return (
    <Contexprovider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </Contexprovider>
  )
}

export default App;