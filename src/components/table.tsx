'use client'

import { Muscle, compare } from '@/lib/util'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Row from './row'

export default function Table({ initialMuscles }: { initialMuscles: Muscle[] }) {
  const [muscles, setMuscles] = useState<Muscle[]>(initialMuscles)

  const rows = muscles
    .toSorted(compare)
    .map((props) => <Row key={props.muscle} {...props} setMuscles={setMuscles} />)

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
