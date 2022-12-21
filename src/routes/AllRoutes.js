import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Nav from '../component/Nav/Nav'
import Blog from '../pages/Blog/Blog'
import Checkout from '../pages/CheckOut/Checkout'
import Course from '../pages/Courses/Course'
import Courses from '../pages/Courses/Courses'
import Faq from '../pages/Faq/Faq'
import Home from '../pages/Home/Home'
import Login from '../pages/LoginSignUp/Login'
import SignUp from '../pages/LoginSignUp/SignUp'
import NotFound from '../pages/NotFound'
import LoginPrivetRoute from './LoginPrivetRoute'
import PrivetRoute from './PrivetRoute'
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'courses/:id',
        element: <Course />,
        loader: ({ params }) =>
          fetch(`https://backend-xi-two.vercel.app/courses/${params.id}`),
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'login',
        element: (
          <LoginPrivetRoute>
            <Login />
          </LoginPrivetRoute>
        ),
      },
      {
        path: 'signup',
        element: (
          <LoginPrivetRoute>
            <SignUp />
          </LoginPrivetRoute>
        ),
      },
      {
        path: 'checkout/:id',
        element: (
          <PrivetRoute>
            <Checkout />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://backend-xi-two.vercel.app/courses/${params.id}`),
      },
    ],
  },
])
