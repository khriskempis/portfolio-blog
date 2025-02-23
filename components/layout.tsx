import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { useState } from 'react';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Logo</span>
            </a>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0" aria-current="page">About Me</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0">Projects</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0">Music</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0">Blog</a>
                </li>
              </ul>
            </div>
            
            <div className="hidden md:flex md:items-center md:w-auto">
              <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a>
              <a href="#" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Follow</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
