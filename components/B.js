import React from 'react'
import C from './C'

export default function B(prop) {
      console.log(prop);
   // console.log(prop.name2);
    return (
        <>
            <div>B Component {prop.name2} </div>
            <C name3="C" msg={prop.msg}> </C>
        </>
    )
}
