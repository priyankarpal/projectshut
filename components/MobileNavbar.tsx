import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { BiSolidBookBookmark } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export const MobileNavBar = () => {
    return (
        <footer className="fixed bottom-1 w-1/11  left-0 right-0 bg-gray-800 text-white py-4 md:hidden rounded-xl mx-5">
            <div className="container mx-auto text-xl flex justify-between items-center px-4">
                <Link href="/">
                    <AiFillHome />
                </Link>
                <Link href='/projects'>
                    <MdExplore />
                </Link>
                <Link href='/docs'>

                    <BiSolidBookBookmark />
                </Link>
                <Link href='https://github.com/priyankarpal/ProjectsHut'>
                    <FaGithub />
                </Link>
            </div>
        </footer>
    )
}
