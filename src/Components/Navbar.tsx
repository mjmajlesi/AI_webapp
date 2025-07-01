import React from 'react'
import { SignedIn, UserButton } from "@clerk/clerk-react"
import { Link } from 'react-router-dom'
function Navbar() {
    let Links = [
        {
            name: "Ganerate",
            Link: "/"
        },
        {
            name: "History",
            Link: "/history"
        }
    ]
    return (
        <>
            <div className='w-full p-4 bg-[#d7d3c611] flex items-center justify-between border-b-2 border-[#3c383811] '>
                <header className='text-2xl font-semibold'>
                    Ganarate
                </header>
                <div className='text-xl flex gap-3 items-center'>
                    <SignedIn>
                        {
                            Links.map(link => (
                                <Link className='hover:text-[#1d2438c3]' to={link.Link}>{link.name}</Link>
                            ))
                        }
                        <UserButton  />
                    </SignedIn>
                </div>
            </div>
        </>
    )
}

export default Navbar