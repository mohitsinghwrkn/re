import React, { useState } from 'react'
import axios from 'axios';
const EX = import.meta.env.VITE_EX

const Backend = () => {
  const [data, setData] = useState()
  fetch(EX + '/ex')
    .then(res => res.text())
    .then(res => setData(res))

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: '2vw' }}> BACKEND USER INTERFACE <br /> {EX} </div>
      <div style={{ border: "1px solid red", margin: '2vw 10vw' }} dangerouslySetInnerHTML={{ __html: data }}>
      </div>
    </div>
  )
}

export default Backend
