import React, { useState } from 'react'
import axios from 'axios';

const Backend = () => {
  const [data, setData] = useState()
  fetch("http://172.16.30.30:5555/ex/something")
    .then(res => res.text())
    .then(res => setData(res))

  return (
    <div>
      <div style={{textAlign:"center", marginTop:'2vw'}}>BACKEND USER INTERFACE</div>
      <div style={{ border:"1px solid red", margin:'2vw 10vw'}} dangerouslySetInnerHTML={{ __html: data }}>
      </div>
    </div>
  )
}

export default Backend
