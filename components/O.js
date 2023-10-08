import React from 'react'
import P from './P';

export default function O(propo) {
  console.log(propo);
  return (
    <>
        <div>O Component  {propo.name15}</div>
        <P name16="P" msg={propo.msg}></P>
    </>
  )
}
