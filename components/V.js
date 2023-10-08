import React from 'react'
import W from './W';

export default function V(propv) {
  console.log(propv);
  return (
    <>
        <div>V Component {propv.name22}</div>
        <W name23="W" msg={propv.msg}></W>
    </>

  )
}
