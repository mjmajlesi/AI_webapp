import React, { useState } from 'react'

function challenge() {

  const [challenge , SetChallenge] = useState(null)
  const [loading , SetLoading] = useState<boolean>(false)
  const [error , SetError] = useState(null)
  const [difficulty , SetDifficulty] = useState<string>("easy")
  const [quote , SetQuote] = useState(null)

  const fetchQute = async () => {}
  const genarateChallenge = async () => {}
  const getNextRestTime = () => {}


  return (
    <>
    <div>
      <h2>Coding Challenge Generator</h2>

    </div>
    </>
  )
}

export default challenge