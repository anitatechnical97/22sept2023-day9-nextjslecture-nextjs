import React from 'react'
import J from './J';

export default function I(propi) {
  console.log(propi);
  return (
    <>
        <div>I Component {propi.name9}</div>
        <J name10="J" msg={propi.msg}></J>
    </>
  )
}
