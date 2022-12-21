import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../auth/firebase.init'
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()
const auth = getAuth(app)
export const AuthUser = createContext()

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //1. Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //   2. Update Name
  const updateName = (name, photo) => {
    setLoading(true)

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // 3. signin with google

  const googleSignin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // 3. signin with google

  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, gitProvider)
  }
  const signinWithPass = (email, password) => {
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true)

    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    updateName,
    googleSignin,
    githubSignIn,
    signinWithPass,
    logOut,
    loading,
    setLoading,
  }
  return <AuthUser.Provider value={authInfo}>{children}</AuthUser.Provider>
}
export default AuthContext
