import React from 'react'
import H from './H';

export default function G(propg) {
  console.log(propg);
  return (
    <>
         <div>G Component {propg.name7}</div>
         <H name8="H" msg={propg.msg}></H>
    </>
  )
}
