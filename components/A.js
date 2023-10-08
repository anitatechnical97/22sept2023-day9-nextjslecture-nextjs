import React from 'react'
import B from './B'

export default function A(props) {
         console.log(props);
    //   console.log(props.name);
    //   console.log(props.msg);
  return (
    <>
       <div>A Component {props.name}</div>
       <B name2="sunita" msg={props.msg}/>
    </>
  )
}
