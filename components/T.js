import React from 'react'
import U from './U';

export default function T(propt) {
  console.log(propt);
  return (
    <>
        <div>T Component  {propt.name20}</div>
        <U name21="U" msg={propt.msg}></U>
    </>
  )
}
