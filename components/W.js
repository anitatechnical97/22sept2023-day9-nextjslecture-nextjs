import React from 'react'
import X from './X';

export default function W(propw) {
  console.log(propw);
  return (
    <>
        <div>W Component  {propw.name23}</div>
        <X name24="X" msg={propw.msg}></X>
    </>
  )
}
