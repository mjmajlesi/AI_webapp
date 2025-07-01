import React from 'react'
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react"
function Authentication() {
  // signUp == create a account / Login
  return (
    <div className='container'>
      <SignedOut>
        <SignIn routing='path' path='/sign-in' />
        <SignUp routing='path' path='/login' />
      </SignedOut>
      <SignedIn>
        <div>
          <p className='font-bold text-[24px] bg-gray-500'>You are signed in Website.</p>
        </div>
      </SignedIn>
    </div>
  )
}

export default Authentication