import React from 'react'
import Z from './Z';

export default function Y(propy) {
  console.log(propy);
  return (
    <>
        <div>Y Component  {propy.name25}</div>
        <Z name26="Z" msg={propy.msg}></Z>
    </>
  )
}
