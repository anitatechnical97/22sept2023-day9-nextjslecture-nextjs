import React from 'react'
import Q from './Q';

export default function P(propp) {
  console.log(propp);
  return (
    <>
        <div>P Component {propp.name16}</div>
        <Q name17="Q" msg={propp.msg}></Q>
    </>
  )
}
