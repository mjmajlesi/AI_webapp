import React from 'react'
import Navbar from './Navbar'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar />
        <main>
            <SignedOut>
                <Navigate to={"/sign-in"} />
            </SignedOut>
            <SignedIn>
                <Outlet />
            </SignedIn>
        </main>
    </div>
  )
}

export default Layout