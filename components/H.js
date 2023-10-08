import React from 'react'
import I from './I';

export default function H(proph) {
  console.log(proph);
  return (
    <>
        <div>H Component {proph.name8}</div>
        <I name9="I" msg={proph.msg}></I>
    </>
  )
}
