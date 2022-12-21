import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login_img from '../../assets/images/login_img.jpg'
import { AuthUser } from '../../contextApi/AuthContext'

import LoginWith from './LoginWith'

function SignUp() {
  const [err, setErr] = useState(null)
  const { createUser, updateName } = useContext(AuthUser)
  const navigate = useNavigate()
  const signup_hendelar = (e) => {
    e.preventDefault()
    const full_name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    const newPassword = e.target.newPassword.value
    if (password !== newPassword) {
      return setErr('Password did not match')
    } else {
      setErr('')
      e.target.name.value = ''
      e.target.photo.value = ''
      e.target.email.value = ''
      e.target.password.value = ''
      e.target.newPassword.value = ''
    }

    createUser(email, password)
      .then((user) => {
        updateName(full_name, photo)
          .then((name) => console.log('name: ', full_name))
          .catch((error) => console.log(error))
      })
      .catch((error) => {
        setErr('Sorry! We cannot create this user')
        console.log(error)
      })
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
              Sign Up Page
            </h1>
          </div>
          <div>
            <LoginWith text="Sign Up" />
          </div>
          <h2 className="text-gray-900 text-lg font-medium title-font mt-5 mb-2">
            Sign Up with Email and password
          </h2>
          <form action="" onSubmit={signup_hendelar}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="photo"
                className="leading-7 text-sm text-gray-600"
              >
                Photo URL
              </label>
              <input
                required
                type="text"
                id="photo"
                name="photo"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="current-password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                required
                type="password"
                id="current-password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="new-password"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm password
              </label>
              <input
                required
                type="password"
                id="new-password"
                name="newPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="text-white w-40 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign Up
              </button>
              <div>
                <h1 className="text-xl text-red-500">{err && err}</h1>
              </div>
            </div>
          </form>
          <p className="text-xl text-gray-500 mt-3">
            Have a account?
            <Link
              to="/login"
              className="text-blue-700 mx-2 border-b-2 border-b-blue-600"
            >
              Login
            </Link>
            please!
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp
