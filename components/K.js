import React from 'react'
import L from './L';

export default function K(propk) {
  console.log(propk);
  return (
    <>
        <div>K Component {propk.name11}</div>
        <L name12="L" msg={propk.msg} ></L>
    </>
  )
}
