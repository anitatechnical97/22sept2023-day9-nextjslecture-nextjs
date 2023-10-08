import React from 'react'
import N from './N';

export default function M(propm) {
  console.log(propm);
  return (
    <>
        <div>M Component {propm.name13}</div>
        <N name14="N" msg={propm.msg} ></N>
    </>
  )
}
