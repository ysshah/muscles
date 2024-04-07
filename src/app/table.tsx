'use client'

import { useState } from "react"
import Muscle from "./muscle"

export default function Table({muscles}: {muscles: {muscle:string, last:string}[]}) {
  const [message, setMessage] = useState('')

  const rows = muscles.map(props => <Muscle key={props.muscle} {...props} setMessage={setMessage}></Muscle>)

  return (
    <div className="h-screen flex flex-column items-center">
      <table className="table">
        <tbody>{rows}</tbody>
      </table>
      {message !== '' && <div className="fixed bottom-2">{message}</div>}
    </div>
  )
}
