import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthUser } from '../../contextApi/AuthContext'

function LoginWith({ text }) {
  const { user, googleSignin, githubSignIn, setLoading } = useContext(AuthUser)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const google_pop_up = () => {
    googleSignin()
      .then((res) => {
        navigate(from, { replace: true })
        
      })
      .catch((err) => setLoading(false))
  }
  const github_pop_up = () => {
    githubSignIn()
      .then((res) => {
        navigate(from, { replace: true })
       
      })
      .catch((err) => setLoading(false))
  }

  return (
    <>
      <button
        onClick={google_pop_up}
        className="flex items-center justify-between w-full border rounded px-3 py-1 mb-2 "
      >
        <img
          src="https://i.ibb.co/0ZdrN21/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
          className="w-10"
        />
        <div className="flex-1">
          <span className="text-lg text-center">{text} With Google</span>
        </div>
      </button>
      <button
        onClick={github_pop_up}
        className="flex items-center justify-between w-full border rounded px-3 py-1  "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
          className="w-10 p-1"
        />
        <div className="flex-1">
          <span className="text-lg text-center">{text} With Github</span>
        </div>
      </button>
    </>
  )
}

export default LoginWith
