import React from 'react'
import Y from './Y';

export default function X(propx) {
  console.log(propx);
  return (
    <>
        <div>X Component {propx.name24}</div>
        <Y name25="Y" msg={propx.msg}></Y>
    </>
  )
}
