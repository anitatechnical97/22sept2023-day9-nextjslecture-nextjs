import React from 'react'
import G from './G'

export default function F(propf) {
    console.log(propf);
  return (
    <>
        <div>F Component {propf.name6}</div>
        <G name7="G" msg={propf.msg}></G>
    </>
  )
}
