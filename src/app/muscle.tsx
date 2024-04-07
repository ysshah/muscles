'use client'

import { compareAsc, format, formatDistanceToNowStrict, parse } from 'date-fns'
import { Dispatch, SetStateAction } from 'react';

export default function Muscle({ muscle, last, setMessage }: { muscle: string; last: string; setMessage: Dispatch<SetStateAction<string>> }) {
  function setDate() {
    setMessage('Loading...')
    fetch('/api/update', {method: 'POST'}).then(() => {
      setMessage('Updated')
      setTimeout(() => setMessage(''), 1000)
    })
  }

  return (
    <tr>
      <td>{muscle}</td>
      <td><button className="btn btn-sm" onClick={setDate}>Today</button></td>
      <td>{last}</td>
    </tr>
  )
}
