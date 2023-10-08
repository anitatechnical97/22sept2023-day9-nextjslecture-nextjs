import React from 'react'
import S from './S';

export default function R(propr) {
  console.log(propr);
  return (
    <>
        <div>R Component  {propr.name18}</div>
        <S name19="S" msg={propr.msg}></S>
    </>
  )
}
