import React from 'react'
import E from './E';

export default function D(propd) {
    console.log(propd);
  return (
    <>
        <div>D Component {propd.name4}</div>
       <E name5="E" msg={propd.msg}></E>
    </>
  )
}
