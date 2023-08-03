import React from "react";

const Cdn = () => {
  const ImageOne = "https://drive.google.com/uc?export=view&id=1kEHpbcS5OGAY5LxzA-5zWHfBr2QW4UBw",
  cdnThree = "https://trotons.com/wp-content/uploads/2021/09/Best-CDN-Service-Providers.jpg",
  cdnFour = "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2019/01/how-does-a-CDN-work-1.png",
  cdnFive = "https://cyberhoot.com/wp-content/uploads/2020/03/What-is-Content-Delivery-Network-1024x647.jpg"
    return (
    <div style={{textAlign:"center"}}>
      <h1>Content Delivery Network</h1>
      <img style={{height:"256px"}} src={ImageOne} alt="Google Deceived" /> <br />
      <p>using google drive as cdn</p>
      <img style={{height:"256px"}} src={cdnThree} alt="" />
      <img style={{height:"256px"}} src={cdnFour} alt="" />
      <img style={{height:"256px"}} src={cdnFive} alt="" />
      <p>various third party cdn</p>
    </div>
  );
};

export default Cdn;
