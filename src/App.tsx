import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { firebase, auth } from './services/firebase'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

type User = {
  id: string,
  name: string,
  avatar: string
}

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

function App() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const googleData = await auth.signInWithPopup(provider)
    
    if (googleData.user) {
      const { displayName, photoURL, uid } = googleData.user

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({ 
        id: uid,
        name: displayName,
        avatar: photoURL
      })
      }
    }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} /> 
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
