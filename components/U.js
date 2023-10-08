import React from 'react'
import V from './V';

export default function U(propu) {
  console.log(propu);
  return (
    <>
        <div>U Component {propu.name21}</div>
        <V name22="V" msg={propu.msg}></V>
    </>
  )
}
