import React from 'react'
import M from './M';

export default function L(propl) {
  console.log(propl);
  return (
    <>
        <div>L Component {propl.name12}</div>
        <M name13="M" msg={propl.msg} ></M>
    </>
  )
}
