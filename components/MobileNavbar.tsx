import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { BiSolidBookBookmark } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

interface NavbarItem {
    icon: React.ReactElement;
    text: string;
    url: string;
  }

const navbarItemsData: NavbarItem[] = [
    {
      icon: <AiFillHome />,
      text: "Home",
      url: "/",
    },
    {
      icon: <MdExplore />,
      text: "Projects",
      url: "/projects",
    },
    {
      icon: <BiSolidBookBookmark />,
      text: "Docs",
      url: "/docs",
    },
    {
      icon: <FaGithub />,
      text: "GitHub",
      url: "https://github.com/priyankarpal/ProjectsHut",
    },
];

export const MobileNavBar = () => {
    return (
        <footer className="fixed bottom-4 w-1/11  left-0 right-0 bg-gray-800 text-white py-4 md:hidden rounded-xl mx-5">
            <div className="container mx-auto text-xl flex justify-between items-center px-4">
                {navbarItemsData.map((link, idx) => (
                    <Link href={link.url} key={idx}>
                        <div className="flex flex-col items-center cursor-pointer transition-all hover:text-primary">
                            {link.icon}
                            <div className="text-sm">{link.text}</div>
                        </div>
                    </Link> 
                ))}
            </div>
        </footer>
    )
}
