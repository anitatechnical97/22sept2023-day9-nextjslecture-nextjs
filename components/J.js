import React from 'react'
import K from './K';

export default function J(propj) {
  console.log(propj);
  return (
    <>
        <div>J Component {propj.name10}</div>
        <K name11="K" msg={propj.msg} ></K>
    </>
  )
}
