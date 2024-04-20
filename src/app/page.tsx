'use client'

import { useEffect, useState } from 'react'
import MuscleRow from './muscle'
import toast, { Toaster } from 'react-hot-toast'
import { Muscle, compare } from './util'

export default function Home() {
  const [muscles, setMuscles] = useState<Muscle[]>([])

  useEffect(() => {
    toast.promise(
      fetch('/api/muscles')
        .then((res) => res.json())
        .then((muscles) => setMuscles(muscles)),
      {
        loading: 'Loading...',
        success: 'Loaded.',
        error: 'Could not load muscles!',
      }
    )
  }, [])

  const rows = muscles
    .toSorted(compare)
    .map((props) => <MuscleRow key={props.muscle} {...props} setMuscles={setMuscles} />)

  return (
    <div className="h-svh flex flex-column items-center">
      <table className="table">
        <tbody>{rows}</tbody>
      </table>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-base-100 color-base-content',
          style: { background: 'inherit', color: 'inherit' },
        }}
      />
    </div>
  )
}
