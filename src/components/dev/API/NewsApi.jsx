import React, { useState, useEffect } from "react";

const NewsApi = () => {
  const [data, setData] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=881fee5411654dc8937550336a500e5d";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.articles);
        setData(res.articles);
      });
  }, []);

  return (
    <div>
      {data.map((document, index) => {
        const {
          source,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        } = document;
        return (
          <div style={{}} key={publishedAt}>
            <div
              style={{ textAlign: "", fontSize: "22px", margin: "16px 10vw" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "256px" }}
                  src={urlToImage}
                  alt="No Image"
                />
                <p style={{ fontSize: "32px", fontWeight: "bold" }}>{title}</p>
              </div>
              {author} <br /> {publishedAt}
              <p style={{ textAlign: "left" }}>
                {description} {content} <button style={{color:"green"}} onClick={()=>location.href=url}>Show More</button>
              </p>
              <p>Source: {source.name} </p>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsApi;
