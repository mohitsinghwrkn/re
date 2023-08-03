import React, { useState, useEffect } from "react";

const Countries = () => {
  const [data, setData] = useState([]);

  const url = "https://restcountries.com/v3.1/all?fields=name,flags";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      {data.map((doc, idx) => {
        const { flags, name } = doc;
        return (
          <div style={{textAlign:"center"}} key={name.common}>
            <img style={{height:"256px"}} src={flags.svg} alt="" />
            <h3>{name.common}</h3>
            <h4 >Official Name : {name.official}</h4>
            <h5 style={{textAlign:"left", margin:"16px 20vw"}}>{flags.alt} <hr /> </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
