import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { signOut } from '../firebase/firebase'

export const DashBoard: React.FC<React.ReactNode> = props => {
  const authContext = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(authContext)
  }
  return(
    <div>
      <h1>Dash</h1>
      <Button variant="outlined" onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}