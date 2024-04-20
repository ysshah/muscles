'use client'

import { useEffect, useState } from 'react'
import MuscleRow from './muscle'
import { Toaster } from 'react-hot-toast'
import { Muscle, compare } from './util'

export default function Home() {
  const [muscles, setMuscles] = useState<Muscle[]>([])

  useEffect(() => {
    fetch('/api/muscles')
      .then((res) => res.json())
      .then((muscles) => setMuscles(muscles))
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
