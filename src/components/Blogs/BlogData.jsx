import React, { useState, useEffect } from 'react'

const BlogData = () => {
    const urlString = window.location.href
    let paramString = urlString.split('?')[1];

    // let paramString = urlString.split('?')[1];
    // let queryString = new URLSearchParams(paramString);

    // for (let pair of queryString.entries()) {
    //     var key = pair[0];
    //     var value = pair[1];
    // }

    // let paramString = urlString.split('?')[1];
    // let params_arr = paramString.split('&');

    // for (let i = 0; i < params_arr.length; i++) {
    //     let pair = params_arr[i].split('=');
    //     var key = pair[0];
    //     var value = pair[1];
    // }

    const [data, setData] = useState()
    useEffect(() => {
        fetch('http://localhost:5555/blog/' + paramString)
            .then(res => res.text())
            .then(res => setData(res))
    }, [])

    return (
        <div style={{ border: "2px solid red" }} dangerouslySetInnerHTML={{ __html: data }}></div>)
}

export default BlogData
