'use client'

import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { Muscle, daysSince, today } from './util'

export default function MuscleRow({
  muscle,
  last,
  setMuscles,
}: {
  muscle: string
  last: string
  setMuscles: Dispatch<SetStateAction<Muscle[]>>
}) {
  function setDate(last: string) {
    console.log('Setting date: %s', last)
    setMuscles((prev) => prev.map((m) => (m.muscle === muscle ? { muscle, last } : m)))
    toast.promise(
      fetch('/api/muscles', { method: 'POST', body: JSON.stringify({ muscle, last }) }).then(
        (res) => res.json()
      ),
      {
        loading: 'Updating...',
        success: 'Updated.',
        error: 'Could not save date!',
      }
    )
  }

  return (
    <tr>
      <td className="pr-2">{muscle}</td>
      <td className="px-2">
        <button className="btn btn-sm" onClick={() => setDate(today)}>
          Today
        </button>
      </td>
      <td className="px-2 text-center">
        <input
          type="date"
          className="input input-bordered input-sm appearance-none"
          value={last}
          onChange={(e) => setDate(e.target.value)}
        />
      </td>
      <td className="pl-2 text-center">{daysSince(last)}</td>
    </tr>
  )
}
