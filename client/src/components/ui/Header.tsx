import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <nav className='shadow'>
          <div className='flex justify-between items-center py-6 px-10 container mx-auto'>
            <div>
              <h1 className='text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer'>
                NextJs-Free
              </h1>
            </div>

            <div>
              <div className='hover:cursor-pointer sm:hidden'>
                <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
                <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
                <span className='h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600'></span>
              </div>
              <div className='flex items-center'>
                <ul className='sm:flex space-x-4 hidden items-center'>
                  <li>
                    <a href='#' className='text-gray-700 hover:text-indigo-600 text-md '>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-gray-700 hover:text-indigo-600 text-md '>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-gray-700 hover:text-indigo-600 text-md '>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-gray-700 hover:text-indigo-600 text-md '>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-gray-700 hover:text-indigo-600 text-md '>
                      Contact
                    </a>
                  </li>
                </ul>
                <div className='md:flex items-center hidden space-x-4 ml-8 lg:ml-12'>
                  <Link href={'/login'} className='text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600'>
                    LOGIN
                  </Link>
                  <Link
                    href={'/register'}
                    className='text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg'
                  >
                    SIGNUP
                  </Link>
                </div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
