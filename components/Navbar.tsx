'use client'
import React, { Suspense, useState, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

interface NavLink {
  name: string
  path: string
  external?: boolean
}

const Navbar: NextPage = () => {
  const activePath = usePathname()
  const [isSession, setIsSession] = useState<boolean>(false);
  const { data: session } = useSession()
  const navLinks: NavLink[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Docs',
      path: '/docs',
    },
    {
      name: 'GitHub',
      path: 'https://github.com/priyankarpal/ProjectsHut',
      external: true,
    },
  ]
useEffect(() => {
    if (session && session.user) {
      setIsSession(true);
    } else {
      setIsSession(false);
    }
  }, [session]);
  const handleSignIn = () => {
    signIn('Github', { callbackUrl: '/projects' })
  }

  return (
    <Suspense>
      <nav className='bg-black top-0 z-10 sticky border-b border-gray-800'>
        <div className='flex justify-between md:justify-around p-5 w-full '>
          {/* Logo for project Hut */}
          <div className='item-navbar' id='logo-ph'>
            <Link
              href='/'
              className='inline-flex h-10 items-center text-white rounded-lg font-extrabold text-[2rem]'
            >
              Ph <span className='text-primary'>.</span>
            </Link>
          </div>

          {/* Main element of navbar */}
          <div className='item-navbar hidden md:block' id='elements-of-navbar'>
            <ul className='flex items-center gap-5 text-[1rem]'>
              {navLinks.map((navLink) => (
                <li key={navLink.path}>
                  {navLink.external ? (
                    <a
                      href={navLink.path}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={
                        activePath === navLink.path
                          ? 'inline-block py-2 px-3 text-center text-primary hover:text-primary rounded-lg'
                          : 'inline-block py-2 px-3 text-center text-white hover:text-primary rounded-lg'
                      }
                    >
                      {navLink.name}
                    </a>
                  ) : (
                    <Link
                      href={navLink.path}
                      className={
                        activePath === navLink.path
                          ? 'inline-block py-2 px-3 text-center text-primary hover:text-primary rounded-lg'
                          : 'inline-block py-2 px-3 text-center text-white hover:text-primary rounded-lg'
                      }
                    >
                      {navLink.name}
                    </Link>
                  )}
                </li>
              ))}
              {isSession  ? (
                <button
                  className='inline-block py-2 px-3 text-center text-white border border-primary hover:text-primary rounded-lg'
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className='inline-block py-2 px-3 text-center text-white border border-primary hover:text-primary rounded-lg'
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Suspense>
  )
}

export default Navbar
