import React from 'react'
import R from './R';

export default function Q(propq) {
  console.log(propq);
  return (
    <>
        <div>Q Component {propq.name17}</div>
        <R name18="R" msg={propq.msg}></R>
    </>
  )
}
