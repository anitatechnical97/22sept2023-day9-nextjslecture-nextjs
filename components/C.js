import React from 'react'
import D from './D';

export default function C(propc) {
      console.log(propc);
   // console.log(propc.name3);
  return (
    <>
         <div>C Component {propc.name3}</div>
         <D name4="D"  msg={propc.msg}></D>
    </>
  )
}
