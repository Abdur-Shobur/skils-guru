import React from 'react'

function Blog() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gray-100 rounded-lg p-5">
            <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
              <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                Question 1: What is Cors?
              </h3>

              <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500">
              Ans_: CORS stands for Cross-Origin Resource Sharing. It allows us
              to relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API. In other words, CORS is a browser
              security feature that restricts cross-origin HTTP requests with
              other servers and specifies which domains access your resources.
              If you want know more about CORS and it's policy.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
              <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                Question_2: Why are you using firebase?
              </h3>

              <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500">
              Ans_: Google Firebase founded in 2011 as a chat API and acquired
              by Google in 2014, It's a platform that now offers active backend
              as a service (BaaS) for building dynamic web and mobile apps.
              Firebase concept is simple. When you build a client-side app with
              JavaScript or any of its frameworks, for instance, Google Firebase
              can turn this into a serverless app in no time. It also removes
              the need to manage databases yourself, as it does that for you.
              Therefore, implementing Firebase means plugging a ready-made
              backend into your client code to make it dynamic. Ultimately, it
              eliminates the need to write backend code from scratch and gives
              you a fully functional one instead.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
              <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                Question_3: What other option do you have to implement
                authentivation
              </h3>

              <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500">
              Ans_: Firebase Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, and more.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
              <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                Question_4: How does the Private route work?
              </h3>

              <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500">
              Ans_:Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-5">
            <div className="flex justify-between items-center border-b gap-4 pb-4 mb-4">
              <h3 className="text-indigo-500 sm:text-lg md:text-xl font-semibold">
                Question_5: What is Node? How does Node work?
              </h3>

              <span className="w-8 h-8 inline-flex justify-center items-center shrink-0 bg-gray-300 text-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500">
              Ans_: Node.js is a JavaScript runtime environment that achieves
              low latency and high throughput by taking a “non-blocking”
              approach to serving requests. In other words, Node.js wastes no
              time or resources on waiting for I/O requests to return. In the
              traditional approach to creating web servers, for each incoming
              request or connection the server spawns a new thread of execution
              or even forks a new process to handle the request and send a
              response. Conceptually, this makes perfect sense, but in practice
              it incurs a great deal of overhead.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
