import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthUser } from '../../contextApi/AuthContext'
import Footer from '../../pages/Footer/Footer'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import './nav.css'
import img from '../../assets/images/logo.jpg'
function Nav() {
  const [userToggle, setUserToggle] = useState(false)
  const [theme, setTheme] = useState(false)
  const { user, logOut } = useContext(AuthUser)
  const userID = user?.uid
  const userProficePic = user?.photoURL
  const sign_out = () => {
    logOut()
  }

  return (
    <div className="">
      <header className="text-gray-600 body-font shadow-md bg-img-add">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl flex items-center gap-2">
              <img src={img} alt="" className="w-10 rounded-full" /> Skils Guru
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="courses" className="mr-5 hover:text-gray-900">
              Courses
            </Link>

            <Link to="faq" className="mr-5 hover:text-gray-900">
              FAQ
            </Link>
            <Link to="blog" className="mr-5 hover:text-gray-900">
              Blog
            </Link>
            <div onClick={() => setTheme((e) => !e)}>
              {theme ? (
                <BsFillSunFill className="text-3xl mr-3 text-red-400 cursor-pointer" />
              ) : (
                <BsFillMoonStarsFill className="text-3xl mr-3 cursor-pointer" />
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {userID ? (
              <>
                <div className="relative">
                  <img
                    onClick={() => setUserToggle((pre) => !pre)}
                    src={
                      userProficePic
                        ? userProficePic
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    }
                    className="w-10 rounded-full h-10 object-center object-cover cursor-pointer"
                    alt="profile"
                  />
                  {userToggle && (
                    <div className="absolute  min-w-[170px] rounded-md right-0 bg-slate-600 text-white px-3 py-2">
                      <h1 className="text-xl my-2">Abdur Shobur</h1>
                      <button
                        onClick={sign_out}
                        className="inline-flex items-center w-full bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="login"
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Login
                </Link>
                <Link
                  to="signup"
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </div>
  )
}

export default Nav
