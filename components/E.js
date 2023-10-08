import React from 'react'
import F from './F'

export default function E(prope) {
    console.log(prope);
  return (
    <>
        <div>E Component {prope.name5}</div>
        <F name6="F" msg={prope.msg}></F>
    </>
  )
}
