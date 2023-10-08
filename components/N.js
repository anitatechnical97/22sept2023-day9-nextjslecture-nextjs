import React from 'react'
import O from './O'

export default function N(propn) {
  console.log(propn);
  return (
    <>
        <div>N Component {propn.name14}</div>
        <O name15="O" msg={propn.msg}></O>
    </>
  )
}
