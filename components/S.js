import React from 'react'
import T from './T';

export default function S(props) {
  console.log(props);
  return (
    <>
        <div>S Component {props.name19}</div>
        <T name20="T" msg={props.msg}></T>
    </>
  )
}
