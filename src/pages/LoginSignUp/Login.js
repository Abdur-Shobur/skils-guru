import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import login_img from '../../assets/images/login_img.jpg'
import { AuthUser } from '../../contextApi/AuthContext'
import LoginWith from './LoginWith'
function Login() {
  const [error, setError] = useState(null)
  const { signinWithPass } = useContext(AuthUser)
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const navigate = useNavigate()
  const login_hendeler = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signinWithPass(email, password)
      .then((user) => {
        navigate(from, { replace: true })
        setError('')
        e.target.email.value = ''
        e.target.password.value = ''
      })
      .catch((err) => setError('Sorry! This user is not valid'))
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src={login_img} alt="" />
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div>
            <h1 className="text-center text-2xl mb-5 text-blue-700">
              Login Page
            </h1>
          </div>
          <div>
            <LoginWith text={'Login'} />
          </div>
          <h2 className="text-gray-900 text-lg font-medium title-font mt-5 mb-2">
            Login with Email and Password
          </h2>
          <form action="" onSubmit={login_hendeler}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="full-name"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="text-white w-40 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Login
              </button>
              <div>
                <h1 className="text-xl text-red-500">{error && error}</h1>
              </div>
            </div>
          </form>
          <p className="text-xl text-gray-500 mt-3">
            New User?
            <Link
              to="/signup"
              className="text-blue-700 mx-2 border-b-2 border-b-blue-600"
            >
              Sign Up
            </Link>
            please!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
